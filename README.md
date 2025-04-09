# Chat Personalizado similar a DeepSeek

Este proyecto es un chat personalizado similar a DeepSeek que se conecta directamente a una API y puede desplegarse en Netlify sin necesidad de usar repositorios de GitHub.

## Características

- **Interfaz moderna con tema oscuro** y botones naranjas con letras negras
- **Conexión directa a API** compatible con OpenAI
- **Diseño responsive** que funciona en dispositivos móviles y de escritorio
- **Manejo de estados** para mostrar indicadores de carga y errores
- **Despliegue sencillo en Netlify** sin necesidad de GitHub

## Tecnologías utilizadas

- **Next.js** - Framework de React para aplicaciones web
- **TypeScript** - Superset de JavaScript con tipado estático
- **Tailwind CSS** - Framework de CSS para diseño rápido
- **Zustand** - Biblioteca para gestión de estado
- **OpenAI SDK** - Para conectar con la API

## Estructura del proyecto

```
proyecto_chat/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts     # Ruta de API para el chat
│   │   ├── globals.css          # Estilos globales
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   └── chat/
│   │       ├── ChatContainer.tsx # Contenedor principal del chat
│   │       ├── ChatInput.tsx     # Componente de entrada de texto
│   │       └── Message.tsx       # Componente de mensaje
│   ├── lib/
│   │   ├── api.ts               # Funciones para conectar con la API
│   │   └── store.ts             # Store de Zustand para gestión de estado
│   ├── types/
│   │   └── chat.ts              # Tipos TypeScript para el chat
│   └── utils/                   # Utilidades adicionales
├── .env.example                 # Ejemplo de variables de entorno
├── netlify.toml                 # Configuración de Netlify
├── netlify.json                 # Configuración adicional de Netlify
├── DEPLOY.md                    # Instrucciones detalladas de despliegue
└── README.md                    # Este archivo
```

## Instalación y uso local

1. Clona este repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` basado en `.env.example` y añade tu API key:

```
OPENAI_API_KEY=tu-api-key-aquí
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Despliegue en Netlify

Para desplegar este proyecto en Netlify sin usar GitHub, sigue las instrucciones detalladas en el archivo [DEPLOY.md](DEPLOY.md).

## Personalización

### Cambiar el tema

Para modificar los colores del tema, edita las variables en `src/app/globals.css`:

```css
:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 13, 17, 23;
  --background-end-rgb: 23, 27, 33;
  --primary-color: 255, 153, 0; /* Color naranja para botones */
  --primary-text: 0, 0, 0; /* Color negro para texto en botones */
  --message-bg-user: 40, 44, 52;
  --message-bg-assistant: 30, 34, 42;
}
```

### Conectar a una API diferente

Para conectar a una API diferente, modifica el archivo `src/lib/api.ts` y actualiza la URL base y los parámetros según sea necesario.

## Licencia

Este proyecto está disponible para uso personal y comercial.

## Soporte

Si necesitas ayuda con este proyecto, puedes contactar al desarrollador.
