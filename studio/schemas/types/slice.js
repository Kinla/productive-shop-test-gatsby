export default {
  name: 'slice',
  title: 'Slice',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['awards', 'highlights', 'locations', 'services', 'values'],
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'award' },
            { type: 'highlight' },
            { type: 'location' },
            { type: 'service' },
            { type: 'value' },
          ],
        },
      ],
    },
  ],
};
