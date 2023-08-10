# Implementación de Funciones de Lista de Tareas

Este repositorio contiene una implementación en Node.js de una lista de tareas con funciones para agregar, eliminar, completar y mostrar tareas. Las funciones fueron modificadas para retornar promesas y se probaron utilizando `async/await` y el método `then()`.

## Preguntas

### ¿Qué sucedió al usar async y await?

Al usar `async/await`, las llamadas a las funciones que retornan promesas pueden ser manejadas de manera más síncrona en el código. Esto hace que el código se vea más similar a la programación síncrona tradicional, lo que puede hacer que sea más fácil de entender y mantener. El uso de `await` pausa la ejecución de la función hasta que la promesa se resuelva, lo que proporciona un flujo más claro y legible.

### ¿Qué sucedió al usar el método then()?

Al usar el método `then()`, se maneja la resolución de las promesas de manera encadenada. Esto es útil cuando se desea controlar la ejecución de código en función del resultado de la promesa. El método `then()` permite especificar una función que se ejecutará cuando la promesa se resuelva, y otra función que se ejecutará si la promesa es rechazada.

### ¿Qué diferencias encontraste entre async, await y el método then()?

- `async/await` permite escribir código asíncrono de manera similar a código síncrono, lo que puede ser más legible y comprensible. `await` pausa la ejecución de la función hasta que la promesa se resuelva o sea rechazada.
- El método `then()` es útil para manejar promesas de manera encadenada y controlar diferentes rutas de ejecución basadas en el resultado de las promesas.
- En términos de estructura, `async/await` puede hacer que el código se vea más secuencial, mientras que el uso de `then()` puede resultar en un estilo de programación más orientado a callbacks.

En general, la elección entre `async/await` y `then()` depende del flujo y la estructura del código, así como de las preferencias personales del programador.
