# ACDC

Autores:

- Pulgar, Perez ( @JPulgarP )
- Pulido, Sebastian ( @CMA1448 )
- Pacheco, Jair ( @CMA1890 )
- Rodriguez, Alexis ( @CMA1888 )
- Garcia, Jhon ( )

## tl;dr

# Instalacion

- Clonar el repositorio `Clone with SSH or HTTPs`.
- Ingresar a `cd linea-corporativa-backend`.
- Ejecutar el comando `npm i`.
- Ejecutar el comando `npm run dev`.

## Crear Extensiones

- Ingresar al directorio `directus`.
- Ejecutar el comando `npm create directus-extension`.
- Elejir el tipo de extension
- Elejir TypeScript

## Agregar Extensiones

Para agregar una nueva extension en la aplicación.

- Copiar el nombre y version exactas de la extension.

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
    "directus": "^9.18.1",
    "directus-extension-editorjs": "^1.0.0",
    "mysql": "^2.18.1"
  }
```
