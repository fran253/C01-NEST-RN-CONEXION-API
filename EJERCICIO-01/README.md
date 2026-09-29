# Ejercicio 01 - Hello Backend (NestJS)

## Qué he aprendido
- A inicializar un proyecto backend independiente utilizando el ecosistema de NestJS y Nest CLI[cite: 1].
- A entender qué es un endpoint HTTP combinando un método (`GET`) y una ruta específica (`/hola`)[cite: 1].
- A utilizar los decoradores `@Controller` y `@Get` para recibir peticiones y devolver respuestas estructuradas en formato JSON[cite: 1].

## Respuesta a la pregunta de comprensión
¿Qué función cumple `@Get()` en este Controller?

Respuesta:
Cumple una responsabilidad concreta dentro del flujo del servidor: indica que el método que tiene justo debajo debe encargarse de responder exclusivamente a las peticiones HTTP de tipo `GET` que lleguen a esa ruta[cite: 1].

## Qué he modificado
- He personalizado el mensaje de respuesta del endpoint para incluir un saludo adaptado.
- He añadido el campo del curso (`curso: 'DAM'`) dentro del objeto JSON devuelto por el método, manteniendo la funcionalidad principal del `GET /hola`[cite: 1].

## Resultado
El servidor de NestJS procesa correctamente la petición GET en la ruta configurada y devuelve un objeto JSON con el mensaje personalizado y los datos del curso, listo para ser consumido por cualquier cliente[cite: 1].