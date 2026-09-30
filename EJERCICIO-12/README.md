# Ejercicio 12 - Creature Lab (`Integración Full Stack`)

## Qué he aprendido
- A consolidar un recorrido Full Stack completo uniendo múltiples operaciones (`GET` de colección, `GET` por Path Param y `PATCH`) dentro de una misma aplicación móvil descentralizada.
- A sincronizar componentes de interfaz complejos en React Native (como `FlatList` horizontal y vistas de detalle dinámicas) con peticiones asíncronas encadenadas.
- A orquestar la comunicación integral entre la interfaz de usuario, el controlador de NestJS y los servicios con almacenamiento temporal en memoria sin introducir patrones arquitectónicos nuevos.

## Respuesta a la pregunta de comprensión
¿Podrías explicar el viaje completo de un dato sin mirar el código?

Respuesta:
El recorrido comienza en la interfaz de React Native, donde la aplicación solicita automáticamente una colección mediante `GET` o el usuario selecciona un elemento interactivo que dispara una petición por Path Param (`GET /criaturas/:id`). Al pulsar el botón de acción, se emite una petición `PATCH` hacia el servidor. NestJS intercepta la llamada en el controlador (`CriaturasController`), deriva la lógica de negocio al servicio correspondiente para actualizar el array temporal en memoria y devuelve el objeto modificado en formato JSON. Finalmente, el cliente móvil procesa la respuesta y actualiza el estado de manera reactiva para reflejar los cambios en tiempo real.

## Qué he modificado
- He generado la estructura independiente del ejercicio con los directorios completos para el backend y el frontend.
- He implementado el controlador y el servicio de criaturas en NestJS soportando la recuperación global, el filtrado por ID y la actualización de likes mediante rutas dinámicas.
- He desarrollado en `App.tsx` la interfaz gráfica de Creature Lab combinando la lista horizontal de selección, la tarjeta interactiva de detalles, el hook de efectos y la gestión del estado para sincronizar la aplicación con el servidor.

## Resultado
La aplicación despliega un panel interactivo que carga automáticamente el listado de criaturas desde el backend. Al pulsar sobre cualquier elemento, se obtienen sus detalles específicos, y al interactuar con el botón de "Me gusta", se ejecuta la petición `PATCH` que actualiza los datos en el servidor y refresca simultáneamente la interfaz de usuario de forma fluida.