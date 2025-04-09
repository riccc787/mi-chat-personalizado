# Instrucciones para desplegar en Netlify

Este archivo contiene las instrucciones para desplegar tu chat personalizado en Netlify sin necesidad de usar GitHub.

## Requisitos previos

- Una cuenta en Netlify (puedes crear una gratis en [netlify.com](https://netlify.com))
- Node.js y npm instalados en tu computadora

## Pasos para el despliegue

### 1. Preparar el proyecto para producción

```bash
# Navega a la carpeta del proyecto
cd ruta/a/proyecto_chat

# Instala las dependencias si no lo has hecho
npm install

# Construye el proyecto para producción
npm run build
```

### 2. Desplegar en Netlify usando Netlify CLI

La forma más sencilla de desplegar sin GitHub es usando Netlify CLI:

```bash
# Instala Netlify CLI globalmente
npm install -g netlify-cli

# Inicia sesión en tu cuenta de Netlify
netlify login

# Despliega el sitio
netlify deploy --prod
```

Durante el proceso de despliegue, se te pedirá:
- Seleccionar un equipo (si tienes varios)
- Crear un nuevo sitio o seleccionar uno existente
- Especificar la carpeta de publicación (usa `.next`)

### 3. Configurar variables de entorno

Después de desplegar, configura la variable de entorno `OPENAI_API_KEY` en el panel de control de Netlify:

1. Ve a tu sitio en el dashboard de Netlify
2. Navega a Site settings > Build & deploy > Environment
3. Añade la variable `OPENAI_API_KEY` con el valor de tu API key

### 4. Actualizar el sitio en el futuro

Para actualizar tu sitio después de hacer cambios:

```bash
# Construye el proyecto con los cambios
npm run build

# Despliega los cambios
netlify deploy --prod
```

## Acceso a tu sitio

Una vez desplegado, tu sitio estará disponible en:
- https://lachatdirb.netlify.app

También puedes configurar un dominio personalizado desde el panel de control de Netlify si lo deseas.
