## Directus-template

Autor:

- Pulido, Sebastian ( @CMA1448 )

## tl;dr

Se utiliza una estructura de monorepo `npm workspaces` y `nx` como dependencia de desarrollo para facilitar y acelerar la experiencia del desarrollador.

# Instalacion

- Clonar el repositorio `Clone with SSH or HTTPs`.
- Ingresar a `cd directus-template`.
- Ejecutar el comando `npm run directus:app` para crear una nueva aplicación de directus.
- Ejecutar el comando `npm run dev` para iniciar la aplicación en modo desarrollo.
- Ejecutar el comando `npm run start` para iniciar la aplicación en modo producción.

## Crear Extensiones

- Ejecutar el comando `npm run directus:extension` para crear una nueva extension de directus.
- Elejir el tipo de extension
- Elejir TypeScript

## Agregar Extensiones

Para agregar una nueva extension en la aplicación.

- Copiar el nombre y version exactas de la extension desde su propio `package.json`.

Ejemplo:

```js
{
  "name": "directus-extension-editorjs",
  "version": "1.0.0",
}
```

- Agregarlo como dependenica en el `package.json` de la App.

Ejemplo:

```js
  "dependencies": {
    "directus-extension-editorjs": "^1.0.0", // <-- nueva extension
    "directus": "^9.18.1",
    "mysql": "^2.18.1"
  }
```
