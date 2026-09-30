# Ejercicio - Mascotas API (Controlador y Servicio en NestJS)

## Qué he aprendido
- A separar responsabilidades en NestJS utilizando un **Controlador** (`mascotas.controller.ts`) para recibir las peticiones HTTP y un **Servicio** (`mascotas.service.ts`) para gestionar la lógica de negocio y los datos.
- A utilizar el decorador `@Get(':id')` junto con `@Param('id')` para capturar parámetros dinámicos desde la URL y transformarlos correctamente a número mediante `Number(id)`.
- A inyectar dependencias a través del constructor (`private readonly service: MascotasService`) para comunicar el controlador con el servicio de forma limpia.

## Respuesta a la pregunta de comprensión
¿Qué función cumple la separación entre el Controller y el Service en este flujo?

Respuesta:
Permite mantener una arquitectura modular y escalable. El controlador se encarga exclusivamente de la comunicación HTTP (recibir peticiones, extraer parámetros y delegar), mientras que el servicio encapsula los datos simulados y la lógica de búsqueda (`.find()`), aislando la gestión de datos de las rutas web.

## Qué he modificado
- He creado el array de datos estático con varias mascotas dentro del servicio.
- He implementado el método `findOne` en el servicio utilizando `.find()` para localizar elementos por su ID único.
- He configurado el controlador para que reciba la petición GET en la ruta dinámica, procese el parámetro de la URL y delegue la búsqueda en el servicio.

## Resultado
El servidor de NestJS procesa correctamente las peticiones de tipo `GET /mascotas/:id`, localiza la mascota en el array de datos y devuelve el objeto JSON correspondiente (por ejemplo, al buscar el ID `2` devuelve a *Michi*), respondiendo de forma adecuada ante IDs existentes o inexistentes.