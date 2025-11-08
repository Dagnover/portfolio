# Portafolio Web - Estructura para AWS S3

Este es un sitio web estático generado con Python, optimizado para ser desplegado en un bucket de Amazon S3 con hosting estático habilitado.

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html          # Página principal (generada por Python)
├── generate.py         # Generador Python del sitio
├── data.py             # Datos del portafolio (edita este archivo)
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── menu.js        # JavaScript mínimo para menú móvil
└── README.md           # Este archivo
```

## 🐍 Generación del Sitio

Este portafolio usa **Python** para generar el HTML estático desde los datos. Esto permite mantener el contenido organizado y fácil de editar.

### Prerrequisitos

- Python 3.6 o superior

### Generar el sitio

1. **Edita los datos** en `data.py`:
   - `PERSONAL_INFO` - Tu información personal
   - `PROJECTS` - Proyectos destacados
   - `EXPERIENCE` - Experiencia laboral
   - `COURSES` - Cursos y certificaciones
   - `VISION` - Visión a 5 años

2. **Genera el HTML**:
   ```bash
   python3 generate.py
   ```

3. **Verifica** que se haya generado `index.html` correctamente

### Flujo de trabajo

```bash
# 1. Editar datos
nano data.py  # o tu editor preferido

# 2. Regenerar HTML
python3 generate.py

# 3. Verificar cambios localmente
open index.html  # macOS
# o simplemente abre index.html en tu navegador

# 4. Desplegar a S3 (ver sección de despliegue)
```

## 🚀 Despliegue en AWS S3

### Prerrequisitos

- Cuenta de AWS con permisos para crear buckets S3
- AWS CLI instalado y configurado (opcional, pero recomendado)
- O acceso a la consola de AWS

### Opción 1: Usando la Consola de AWS

1. **Crear un bucket S3**
   - Ve a la consola de S3
   - Crea un bucket con un nombre único (ej: `tu-nombre-portfolio`)
   - Elige la región más cercana a tus usuarios
   - **Desactiva** "Block all public access" (necesario para hosting estático)
   - Acepta la advertencia

2. **Habilitar hosting estático**
   - En las propiedades del bucket, ve a "Static website hosting"
   - Habilita "Static website hosting"
   - Documento índice: `index.html`
   - Documento de error: `index.html` (opcional, para SPAs)
   - Guarda los cambios

3. **Configurar permisos del bucket**
   - Ve a la pestaña "Permissions"
   - En "Bucket policy", agrega la siguiente política (reemplaza `TU-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU-BUCKET-NAME/*"
    }
  ]
}
```

4. **Subir archivos**
   - Ve a la pestaña "Objects"
   - Haz clic en "Upload"
   - Sube todos los archivos manteniendo la estructura:
     - `index.html` (raíz) - **¡Importante! Debe ser el generado por Python**
     - `css/styles.css`
     - `js/menu.js`
   - **NO subas** `generate.py` ni `data.py` (solo se usan para generar el sitio)
   - Asegúrate de que las rutas relativas se mantengan

5. **Obtener la URL del sitio**
   - En "Static website hosting", encontrarás la URL del endpoint
   - Formato: `http://TU-BUCKET-NAME.s3-website-REGION.amazonaws.com`

### Opción 2: Usando AWS CLI

```bash
# 1. Crear el bucket (reemplaza TU-BUCKET-NAME y REGION)
aws s3 mb s3://TU-BUCKET-NAME --region REGION

# 2. Habilitar hosting estático
aws s3 website s3://TU-BUCKET-NAME \
  --index-document index.html \
  --error-document index.html

# 3. Configurar política pública
cat > bucket-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU-BUCKET-NAME/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy \
  --bucket TU-BUCKET-NAME \
  --policy file://bucket-policy.json

# 4. Generar el HTML (si aún no lo has hecho)
python3 generate.py

# 5. Subir archivos (desde el directorio del proyecto)
aws s3 sync . s3://TU-BUCKET-NAME \
  --exclude "README.md" \
  --exclude ".git/*" \
  --exclude ".DS_Store" \
  --exclude "*.py" \
  --exclude "__pycache__/*"

# 5. Obtener la URL
echo "http://TU-BUCKET-NAME.s3-website-REGION.amazonaws.com"
```

### Opción 3: Usando CloudFront (Recomendado para producción)

Para mejor rendimiento y HTTPS, configura CloudFront:

1. Crea una distribución CloudFront
2. Origen: tu bucket S3 (selecciona el endpoint del sitio web estático, no el bucket directamente)
3. Configura un certificado SSL/TLS (o usa el certificado por defecto de CloudFront)
4. Opcional: configura un dominio personalizado

## 🔧 Personalización

### Editar contenido

**Todo el contenido se edita en `data.py`:**

- `PERSONAL_INFO` - Tu nombre, título, descripción, email, redes sociales, etc.
- `PROJECTS` - Lista de proyectos destacados
- `EXPERIENCE` - Experiencia laboral
- `COURSES` - Cursos y certificaciones
- `VISION` - Visión a 5 años

Después de editar `data.py`, ejecuta `python3 generate.py` para regenerar el HTML.

### Editar metadatos SEO

Los metadatos SEO se generan automáticamente desde `PERSONAL_INFO` en `data.py`. Si necesitas personalizar más, edita `generate.py`.

### Personalizar estilos

- Edita `css/styles.css` para cambiar colores, fuentes, espaciados, etc.
- No necesitas regenerar el HTML después de cambiar estilos

## 📝 Notas Importantes

- **Generación con Python**: El HTML se genera desde `data.py` usando `generate.py`. Siempre regenera el HTML después de editar los datos.
- **Rutas relativas**: Todos los archivos usan rutas relativas (`css/styles.css`, `js/menu.js`), por lo que funcionan correctamente en S3
- **Sin dependencias externas**: El sitio no requiere CDN ni librerías externas (solo Python para generar)
- **JavaScript mínimo**: Solo se usa JavaScript para el menú móvil (`js/menu.js`)
- **HTTPS**: Para producción, considera usar CloudFront con certificado SSL
- **Dominio personalizado**: Puedes configurar un dominio usando Route 53 y CloudFront

## 🔄 Actualizar el sitio

Para actualizar el contenido:

```bash
# 1. Edita data.py con tus cambios
nano data.py

# 2. Regenera el HTML
python3 generate.py

# 3. Sube a S3 usando AWS CLI
aws s3 sync . s3://TU-BUCKET-NAME \
  --exclude "README.md" \
  --exclude ".git/*" \
  --exclude ".DS_Store" \
  --exclude "*.py" \
  --exclude "__pycache__/*"

# O sube los archivos manualmente desde la consola
# (solo index.html, css/, y js/, NO los archivos .py)
```

## 📚 Recursos Adicionales

- [Documentación de S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Configurar CloudFront con S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html)

