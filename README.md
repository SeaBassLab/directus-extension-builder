## Directus-template

### Author:

@SeaBassLab [profile](https://github.com/SeaBassLab)

## tl;dr

A monorepo framework of `npm workspaces` and `nx` is used as a development dependency to make the developer experience easier and faster.

# Installation

- Clone the repository `Clone with SSH or HTTPs`.
- Enter `cd directus-template`.
- Execute the command `npm run directus:app` to create a new directus application.
- Execute the `npm run dev` command to start the application in development mode.
- Execute the `npm run start` command to start the application in production mode.

## Create Extensions

- Execute the command `npm run directus:extension` to create a new directus extension.
- Choose the type of extension
- Choose TypeScript/ JavaScript

## Add Extensions

To add a new extension in the application.

- Copy the exact name and version of the extension from your own `package.json`.

Example:

```js
{
  "name": "directus-extension-editor-js",
  "version": "1.0.0",
}
```

- Add it as a dependency in the `package.json` of the App.

Example:

```js
  "dependencies": {
    "directus-extension-editorjs": "^1.0.0", // <-- nueva extension
    "directus": "^9.18.1",
    "mysql": "^2.18.1"
  }
```
