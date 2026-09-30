# Ejercicio 10 - Likes (`PATCH`)

## Qué he aprendido
- A utilizar el método HTTP `PATCH` en peticiones asíncronas desde React Native para solicitar modificaciones parciales de recursos existentes en el servidor.
- A programar en el backend de NestJS un controlador con el decorador `@Patch` y un servicio capaz de manipular de manera temporal los datos almacenados en memoria (arrays).
- A sincronizar el estado reactivo del cliente móvil (`useState`) con la respuesta JSON devuelta por el servidor tras efectuar una actualización.

## Respuesta a la pregunta de comprensión
¿Por qué los likes vuelven al valor inicial cuando reiniciamos NestJS?

Respuesta:
Porque los datos se gestionan mediante una persistencia simulada almacenada exclusivamente en la memoria RAM del servidor (en un array temporal dentro del Service). Al apagar o reiniciar NestJS, la memoria se vacía por completo y el array recupera sus valores originales descritos en el código, a la espera de que más adelante se implemente una base de datos real para garantizar la persistencia física de la información.

## Qué he modificado
- He estructurado el proyecto independiente del ejercicio configurando los directorios de `backend` y `frontend`.
- He desarrollado el controlador (`mascotas.controller.ts`) y el servicio (`mascotas.service.ts`) para incrementar y devolver la cifra de "likes" de una mascota concreta filtrada por su identificador numérico.
- He implementado en `App.tsx` la interfaz interactiva con el componente visual de la mascota, el contador dinámico de "likes" y el botón asociado a la función asíncrona con el método `PATCH`.

## Resultado
Al pulsar el botón "Me gusta" desde la aplicación móvil, se ejecuta una petición HTTP de tipo `PATCH` hacia el servidor NestJS. El servicio procesa la actualización parcial incrementando el contador en el array temporal y devuelve el objeto modificado en formato JSON, permitiendo que el cliente refleje instantáneamente el nuevo número de "likes" en la pantalla.