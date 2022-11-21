export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'slice',
      title: 'Slice',
      type: 'slice',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    },
  ],
};
