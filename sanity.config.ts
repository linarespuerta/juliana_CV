import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
    name: 'default',
    title: 'Juliana CV Admin',

    projectId: 'km3k177u', // Replaced with generated ID
    dataset: 'production',

    basePath: '/admin',

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})
