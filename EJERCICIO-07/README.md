# Ejercicio 07 - Carga automática (`useEffect`)

## Qué he aprendido
- A utilizar el Hook `useEffect` en React Native para ejecutar código asíncrono de manera automática justo en el momento en que la pantalla se renderiza y aparece por primera vez.
- A combinar la carga inicial desatendida con la interactividad manual gracias a un botón que reutiliza la misma función de fetch.
- A consolidar el flujo completo del ecosistema Full Stack, conectando una petición HTTP automática desde el cliente móvil hacia un controlador de NestJS con CORS habilitado.

## Respuesta a la pregunta de comprensión
¿Qué diferencia hay entre llamar `cargarMensaje` desde un botón y desde `useEffect`?

Respuesta:
La diferencia principal radica en el detonante de la acción. Llamarla desde un botón requiere una interacción manual y explícita del usuario (pulsar la pantalla). En cambio, `useEffect` con un array de dependencias vacío (`[]`) se ejecuta de forma completamente automática como consecuencia del montaje del componente en cuanto la pantalla aparece, sin necesidad de que el usuario haga clic en nada.

## Qué he modificado
- He creado la estructura independiente del ejercicio con las carpetas `backend` y `frontend`.
- He programado el controlador del backend (`mensaje.controller.ts`) para que devuelva un mensaje JSON con el estado de disponibilidad del servidor (`🟢 Backend disponible`).
- He implementado en `App.tsx` el estado inicial de carga (`Cargando…`), el hook `useEffect` para lanzar la petición al iniciar la aplicación y un botón opcional para recargar los datos manualmente.

## Resultado
Al arrancar la aplicación, la interfaz muestra de forma automática el estado de carga y efectúa la petición al backend de NestJS de inmediato. Una vez que el servidor responde con el JSON, el estado se actualiza y se muestra el mensaje de éxito en pantalla sin requerir intervenciones manuales.