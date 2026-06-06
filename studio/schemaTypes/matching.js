// studio/schemaTypes/matching.js
export default {
  name: 'matching',
  title: 'Matching Roles',
  type: 'document',
  fields: [
    {
      name: 'roleTitle',
      title: 'Role Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'traits',
      title: 'Traits / Skills (Press Enter to add)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'E.g., Programmering, Utredning, Nätverk, Analytisk',
    },
    {
      name: 'interviewTip',
      title: 'Competence-Based Interview Tip',
      type: 'text',
      description: 'Specific advice for a competence-based interview for this role.',
    },
  ],
}
