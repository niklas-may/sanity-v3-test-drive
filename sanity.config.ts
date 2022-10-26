import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'The Night League',

  projectId: "3754j8h9",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
