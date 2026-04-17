# Configuración de EmailJS para el Formulario de Contacto

El formulario de contacto utiliza EmailJS para enviar correos directamente desde el frontend sin necesidad de un backend.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Visita: https://www.emailjs.com/
- Crea una cuenta gratuita (permite hasta 200 emails/mes)

### 2. Crear un Email Service
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Conecta tu cuenta de email (dagnover4030@gmail.com)
- Guarda el **Service ID**

### 3. Crear un Email Template
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Configura el template con estos campos:
  - **To Email**: dagnover4030@gmail.com
  - **From Name**: {{from_name}}
  - **From Email**: {{from_email}}
  - **Subject**: {{subject}}
  - **Message**: {{message}}
- Guarda el **Template ID**

### 4. Obtener Public Key
- Ve a "Account" → "General"
- Copia tu **Public Key**

### 5. Configurar en el código
Abre el archivo `js/contact.js` y reemplaza:

```javascript
// Línea ~12
emailjs.init('YOUR_PUBLIC_KEY'); // Reemplaza con tu Public Key

// Líneas ~45-46
const serviceID = 'YOUR_SERVICE_ID'; // Reemplaza con tu Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Reemplaza con tu Template ID
```

## Ejemplo de configuración completa:

```javascript
// Inicializar EmailJS
emailjs.init('abc123xyz789'); // Tu Public Key

// En la función de envío:
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
```

## Notas importantes:
- El servicio gratuito de EmailJS permite 200 emails/mes
- Los emails se envían directamente desde el frontend
- No se requiere backend ni servidor
- El template debe coincidir con los nombres de variables: `from_name`, `from_email`, `subject`, `message`

## Alternativa sin EmailJS:
Si prefieres no usar EmailJS, puedes modificar el código para usar:
- Formspree (https://formspree.io/)
- Netlify Forms (si despliegas en Netlify)
- Un backend propio (Node.js, Python, etc.)

