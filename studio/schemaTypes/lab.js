// studio/schemaTypes/lab.js
export default {
  name: 'lab',
  title: 'Labs & Tips',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Hands-on Lab', value: 'lab'},
          {title: 'Career Tip', value: 'tip'},
          {title: 'Tool Guide', value: 'tool'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Nybörjare (Beginner)', value: 'beginner'},
          {title: 'Medel (Intermediate)', value: 'intermediate'},
          {title: 'Avancerad (Advanced)', value: 'advanced'},
        ],
      },
      hidden: ({document}) => document?.category === 'tip', // Gömmer svårighetsgrad om det bara är ett tips
    },
    {
      name: 'estimatedTime',
      title: 'Estimated Time',
      type: 'string',
      description: 'E.g., "30 min" or "1-2 hours"',
    },
    {
      name: 'introduction',
      title: 'Introduction (The "Why")',
      type: 'text',
      description: 'Explain the concept with a real-world analogy.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Step-by-Step Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The actual steps, commands, or detailed advice.',
    },
    {
      name: 'interviewTip',
      title: 'Competence-Based Interview Tip',
      type: 'text',
      description: 'How to use this lab/tip in a job interview.',
    },
  ],
}
