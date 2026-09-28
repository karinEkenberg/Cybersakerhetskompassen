export default {
  name: 'lexiconCategory',
  title: 'Lexikonkategorier',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Kategorinamn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beskrivning (valfritt)',
      type: 'text',
      rows: 2,
    },
  ],
}