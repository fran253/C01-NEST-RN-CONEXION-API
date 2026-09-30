# Ejercicio 04 - Filtra videojuegos (Query Params)

## Qué he aprendido
- A distinguir conceptualmente un parámetro de ruta (`Path Param`, como `/juegos/3`) de un parámetro de consulta (`Query Param`, como `/juegos?genero=aventura`).
- A utilizar el decorador `@Query()` en el controlador de NestJS para capturar filtros opcionales enviados a través de la URL.
- A aplicar el método `.filter()` de JavaScript en el servicio para devolver los elementos que coincidan con un criterio específico o retornar la lista completa si no se recibe ningún filtro.

## Respuesta a la pregunta de comprensión
¿Qué diferencia hay entre utilizar `@Param()` y `@Query()` en un controlador de NestJS?

Respuesta:
`@Param()` se utiliza para extraer valores que forman parte de la estructura fija de la ruta (Path Params), los cuales identifican un recurso concreto e inequívoco (por ejemplo, el ID de un videojuego). En cambio, `@Query()` se emplea para capturar los parámetros de consulta que van después del signo de interrogación (`?`), los cuales sirven para añadir criterios opcionales como filtros, búsquedas, ordenación o paginación sin alterar la ruta base del recurso.

## Qué he modificado
- He creado la estructura base para el módulo de juegos mediante los comandos de Nest CLI (`nest g controller juegos` y `nest g service juegos`).
- He definido un array estático de cuatro videojuegos en el servicio, incluyendo distintas propiedades como el género para poder filtrarlos.
- He implementado el método `findAll` en el servicio utilizando una condición para comprobar si se recibe el parámetro `genero` y aplicando `.filter()` en caso afirmativo, o devolviendo todos los juegos si el parámetro está ausente.
- He configurado el controlador para capturar la petición GET y delegar la consulta al servicio incorporando el decorador `@Query`.

## Resultado
El servidor procesa correctamente las peticiones tanto en la ruta base (`GET /juegos`) devolviendo el listado completo, como al aplicar filtros dinámicos (por ejemplo, `GET /juegos?genero=aventura`), respondiendo con un `200 OK` y el subconjunto filtrado de datos en formato JSON.