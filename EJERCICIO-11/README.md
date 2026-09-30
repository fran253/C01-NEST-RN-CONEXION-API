# Ejercicio 11 - Mini tienda (`POST` · `@Body`)

## Qué he aprendido
- A realizar peticiones HTTP de tipo `POST` desde una aplicación en React Native enviando datos estructurados dentro del cuerpo de la petición (`body` serializado con `JSON.stringify`).
- A configurar las cabeceras HTTP necesarias (`Content-Type: application/json`) para que el servidor interprete correctamente el formato de la información enviada por el cliente.
- A recibir, procesar y almacenar objetos nuevos en el servidor mediante el decorador `@Body()` en NestJS, integrándolos de manera temporal en el servicio y actualizando la interfaz móvil de forma reactiva.

## Respuesta a la pregunta de comprensión
¿Qué recorrido realiza el objeto hasta llegar a `@Body()`?

Respuesta:
El objeto nace en los campos de texto interactivos (`TextInput`) de React Native a través del estado del componente. Al pulsar el botón de acción, se empaqueta en formato JSON y viaja a través de la red mediante una petición HTTP `POST`. Al llegar al servidor, NestJS intercepta la llamada en el controlador (`ProductosController`) y utiliza el decorador `@Body()` para extraer los datos deserializados, pasándoselos finalmente al servicio encargado de incorporarlos al array en memoria.

## Qué he modificado
- He creado la estructura independiente del ejercicio con sus carpetas correspondientes para el backend y el frontend.
- He implementado el controlador y el servicio de productos en NestJS para soportar la creación y el registro de nuevos elementos en el array temporal.
- He desarrollado en `App.tsx` la interfaz visual de la mini tienda, incluyendo campos de texto para el nombre y precio, la acción de inserción asíncrona mediante `POST` y la renderización en tiempo real de los elementos con `FlatList`.

## Resultado
La aplicación móvil permite introducir los datos de un nuevo artículo y enviarlos al servidor de forma dinámica. El backend de NestJS procesa la petición a través de `@Body()`, añade el producto al array y devuelve el objeto creado, permitiendo que la interfaz se refresque automáticamente para mostrar el nuevo artículo listado junto al resto de la tienda.