export default {
  name: 'quiz',
  title: 'Quiz Questions',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Answer Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Role Category Match',
              type: 'string',
              description: 'Ex: incident, pentest',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
}
