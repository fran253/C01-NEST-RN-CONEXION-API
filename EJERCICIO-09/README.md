# Ejercicio 09 - Busca superhéroe (`URL dinámica` / `Path Param`)

## Qué he aprendido
- A construir peticiones HTTP dinámicas desde la interfaz móvil concatenando parámetros variables en la URL (como `/heroes/:id`).
- A capturar y extraer parámetros de ruta en el backend de NestJS utilizando el decorador `@Param('id')` dentro del controlador.
- A coordinar el flujo de datos Full Stack donde un identificador introducido mediante un componente interactivo (`TextInput`) viaja de forma reactiva hasta el servicio del servidor para filtrar y devolver el registro correspondiente.

## Respuesta a la pregunta de comprensión
Sigue el valor `id` desde React Native hasta `@Param('id')`. ¿Por qué pasa por ahí?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. El valor nace en el estado del frontend (`TextInput`), se concatena dinámicamente en la ruta HTTP solicitada por `fetch`, viaja a través de la red como un parámetro de la URL, es interceptado en el controlador de NestJS mediante `@Param('id')` y, finalmente, es procesado por el servicio para buscar la coincidencia exacta en la estructura de datos.

## Qué he modificado
- He estructurado el proyecto independiente para el ejercicio con sus carpetas de `backend` y `frontend`.
- He desarrollado el controlador (`heroes.controller.ts`) y el servicio (`heroes.service.ts`) en NestJS para gestionar la búsqueda individual de elementos por su identificador numérico.
- He implementado en el componente principal de React Native (`App.tsx`) un campo de texto numérico (`TextInput`), un botón de acción y la lógica asíncrona para consultar dinámicamente el endpoint del superhéroe e interpretar el objeto JSON resultante en la interfaz visual.

## Resultado
La aplicación móvil despliega un campo interactivo y un botón de búsqueda. Al introducir un ID y pulsar la acción, el sistema genera la URL dinámica correspondiente, realiza la petición asíncrona hacia el servidor NestJS, recupera el objeto asociado y renderiza en pantalla los atributos específicos del superhéroe (nombre, poder y universo) en tiempo real.