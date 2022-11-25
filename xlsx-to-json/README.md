# directus-extension-xlsx-to-json

### Author:

@SeaBassLab [profile](https://github.com/SeaBassLab)

## tl;dr

- Install by executing `npm i directus-extension-xlsx-to-json`
- or `yarn add directus-extension-xlsx-to-json`.

## Description

directus-extension-xlsx-to-json is a directus-custom-endpoint library that allows you to convert xlsx to json simply and easily.

## Motivation

Directus is a modern, open source data platform. With a headless API that manages custom SQL database architectures. It allows users to import/export collections in bulk via CSV files. But many of our clients still use Excel files for bulk uploads 🥹. I ran into the difficult task of having to transfer huge excel files (50k+ records at a time 😅) to the SQL database. And all that effort and dedication led me to create this practical and efficient solution. I hope you enjoy it 😉.

## Getting started

1. Install the package `npm i directus-extension-xlsx-to-json`.

2. Create a collection where to save the excel.

3. Create the collection where you are going to save the data of that excel.

4. Create a flow to obtain the id of the uploaded Excel file and be able to pass it to the collection that will save the data.

## Necessary Collections

### Create a collection to store the files `my-xlsx-collection`

- Create a file type field

### Create a collection to store the data `my-bulk-upload-collection`

- The fields in this collection have to match the excel columns

## Necessary Flow

- ## Create the flow that you think is appropriate to trigger

#### Keep in mind that you need the id of this file that you just uploaded to your assets

- Then create a `Webhook / Request URL`
- Method `GET`
- URL `{{$accountability.origin}}/items/{{$trigger.body.collection}}/{{$trigger.body.keys[0]}}`

#### After that flow succeed...

- Create another one `Webhook / Request URL`
- Method `POST`
- URL`{{$accountability.origin}}/sheetToJson/{{$last.data.data.excel}}`
- Request body :`{ "collection": "my-bulk-upload-collection" }`

## Limitations

- The fields in `my-bulk-upload-collection` have to match the excel columns. Otherwise it does not load the data and results in a 404 error
- The id field has to be `auto-incemented integer`. Because this package does not handle uuid generators to be more optimal and light

## Considerations

- You can treat these bulk upload collections as staging collections and then pass the data into a collection that handles the relationships between them and the necessary business logic. Is up to you

## Author

<table>
  <tr>
    <td>
      <img  src="https://avatars.githubusercontent.com/u/70863556?s=400&v=4"  width="100">
    </td>
    <td>
      Sebastian Pulido
      <br  />
        <a  href="mailto:sebastian.pulido@ibisdev.tech">sebastian.pulido@ibisdev.tech</a>
      <br  />
      Software Developer at IbisDev
      <br  />
        <a  href="https://ibisdev.tech">https://ibisdev.tech</a>
    </td>
  </tr>
</table>
