// studio/schemaTypes/roadmap.js
export default {
  name: 'roadmap',
  title: 'Roadmaps',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Roadmap Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      title: 'Roadmap Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepTitle',
              title: 'Step Title (e.g., Steg 1)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Popup Content',
              type: 'array',
              of: [{type: 'block'}], // Enables Portable Text for rich formatting
            },
          ],
        },
      ],
    },
  ],
}
