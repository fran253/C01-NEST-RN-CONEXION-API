# Ejercicio 02 - API de pizzas

## Qué he aprendido
- A generar la estructura base de un proyecto y sus módulos utilizando los comandos de Nest CLI (`nest g controller pizzas` y `nest g service pizzas`).
- A separar la entrada HTTP de la lógica que gestiona datos temporales.
- A comprender el flujo unidireccional: el **Controller** recibe la petición HTTP (`@Get()`) y delega el trabajo al **Service**, que es el responsable de acceder al array de datos y devolver la información.

## Respuesta a la pregunta de comprensión
¿Por qué colocamos el array en el Service y no en el Controller?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. El Controller solo debe ocuparse de la entrada/salida HTTP (rutas y peticiones), mientras que el Service asume la responsabilidad de la lógica de negocio y la gestión de datos (en este caso, un array temporal, que en el futuro será una base de datos real).

## Qué he modificado
- He generado los archivos del controlador y el servicio dentro de la carpeta `backend/src/pizzas`.
- He implementado el array temporal en `pizzas.service.ts` y he añadido una tercera pizza con emoji y precio (`{ id: 3, nombre: 'Pepperoni🍕', precio: 13 }`), cumpliendo con el paso 4 del laboratorio.
- He programado el método `findAll()` en el Controller para que delegue la petición `GET /pizzas` al método homónimo del Service.

## Resultado
El servidor arranca correctamente. Al hacer una petición `GET` a la ruta `/pizzas`, el endpoint devuelve un `200 OK` y un array en formato JSON con la lista completa de las 3 pizzas configuradas en el Service.