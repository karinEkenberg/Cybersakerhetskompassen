export default {
  name: 'lexicon',
  title: 'Lexicon Terms',
  type: 'document',
  fields: [
    {
      name: 'term',
      title: 'Term',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'abbreviation',
      title: 'Abbreviation (Optional)',
      type: 'string',
      description: 'E.g., MFA, SOC, SIEM',
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
