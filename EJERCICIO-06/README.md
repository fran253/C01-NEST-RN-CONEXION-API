# Ejercicio 06 - Estado de conexión (`useState`)

## Qué he aprendido
- A utilizar el Hook `useState` en React Native para gestionar información dinámica y reactiva dentro de un componente funcional.
- A conectar una petición HTTP asíncrona (`fetch` con `async/await`) con la función actualizadora del estado (`setMensaje`) para reflejar los datos del servidor directamente en la interfaz gráfica.
- A consolidar la arquitectura Full Stack comunicando un cliente móvil con un servidor NestJS habilitado con CORS y direcciones de red locales.

## Respuesta a la pregunta de comprensión
¿Qué aporta `useState` frente a una variable normal en React Native?

Respuesta:
Aporta la capacidad de reactividad en la interfaz. Una variable de JavaScript normal cambiaría de valor en la memoria interna, pero React no se enteraría ni volvería a representar el componente. Con `useState`, cuando llamamos a la función actualizadora (`setMensaje`), React detecta el cambio, actualiza el valor y vuelve a representar automáticamente la interfaz gráfica para mostrar el nuevo estado en pantalla.

## Qué he modificado
- He creado la estructura independiente del ejercicio con las carpetas `backend` y `frontend`.
- He programado el controlador del backend para que devuelva un mensaje JSON con indicador visual (`¡Conexión conseguida!`).
- He implementado en `App.tsx` el estado inicial (`🔴 Sin conectar`), la función asíncrona para consumir el endpoint a través de la IP local y la vinculación del evento con el botón y el componente de texto.

## Resultado
La aplicación arranca mostrando el estado de desconexión. Al pulsar el botón de conexión, se ejecuta la petición HTTP al backend de NestJS, el servidor responde con el JSON y, mediante `useState`, la interfaz de React Native se actualiza de manera fluida mostrando el mensaje de éxito en tiempo real.