export default {
  name: 'role',
  title: 'Cyber Security Roles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Role Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Optional Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping and focusing in the UI
      },
    },
  ],
}
