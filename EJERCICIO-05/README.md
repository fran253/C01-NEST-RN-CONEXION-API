# Ejercicio 05 - Mi primera conexión (Full Stack)

## Qué he aprendido
- A estructurar un proyecto Full Stack independiente combinando un **backend** (NestJS) y un **frontend** (React Native con Expo) dentro de la misma carpeta de ejercicio.
- A configurar CORS en el servidor (`app.enableCors()`) para permitir de forma segura la comunicación entre diferentes puertos y orígenes.
- A utilizar la función `fetch` junto con `async/await` en React Native para consumir una API remota utilizando la IP local de la red (IPv4) en lugar de `localhost`.

## Respuesta a la pregunta de comprensión
¿Por qué el móvil necesita conocer la IP del equipo donde se ejecuta NestJS en lugar de usar `localhost`?

Respuesta:
Porque `localhost` dentro de un dispositivo móvil o emulador apunta al propio teléfono, no al ordenador de desarrollo. El dispositivo móvil necesita la dirección IP local de la red de la máquina host para localizar y alcanzar correctamente el servidor backend.

## Qué he modificado
- He creado la estructura Full Stack (`backend` y `frontend`) y configurado el controlador en NestJS para responder a la ruta `/mensaje` con un objeto JSON.
- He habilitado CORS en el archivo `main.ts` del servidor y configurado las reglas del Firewall de Windows para permitir el tráfico entrante por el puerto 3000.
- He implementado en `App.tsx` la lógica de conexión mediante `fetch` apuntando a la IP local del equipo y enlazado la llamada al evento del botón en la interfaz de React Native.

## Resultado
La comunicación de extremo a extremo funciona correctamente: al pulsar el botón en la aplicación móvil, se ejecuta la petición HTTP GET contra el backend de NestJS, el servidor procesa la ruta, devuelve los datos en formato JSON y la aplicación los recibe y gestiona con éxito.