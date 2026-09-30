# Instrucciones de Ejecución y Arquitectura del Proyecto

## ⚠️️ Nota Importante sobre la Estructura del Frontend
Durante la creación de las aplicaciones móviles con las últimas versiones de Expo (`npx create-expo-app@latest frontend`), el generador por defecto utiliza **Expo Router** en lugar del archivo tradicional `App.tsx` en la raíz. 

Por este motivo, para asegurar la correcta ejecución de los ejercicios y su compatibilidad con la plantilla, todo el código correspondiente a la interfaz de usuario de cada ejercicio se encuentra estructurado e integrado dentro de **`frontend/src/index.tsx`**, que actúa como la pantalla principal por defecto del enrutador.

---

## 🚀 Cómo probar y ejecutar cada ejercicio

Para poner en marcha cualquiera de los ejercicios de la isla de forma independiente, sigue estos pasos desde su respectiva carpeta:

### 1. Iniciar el Backend (NestJS)
Abre una terminal, sitúate en la carpeta del backend del ejercicio correspondiente y arranca el servidor en modo desarrollo:
```bash
cd backend
npm run start:dev

### 2. Iniciar el Frontend (NestJS)
Abre una terminal, sitúate en la carpeta del frontend del ejercicio correspondiente y arranca la aplicación en modo desarrollo:
```bash
cd frontend
npx expo start
