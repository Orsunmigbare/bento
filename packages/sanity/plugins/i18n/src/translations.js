export default {
  title: "Translations",
  name: "translations",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Key",
      name: "i18nKey",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Value",
      name: "value",
      type: "array",
      of: [
        { type: "localeString" },
        { type: "localeText" },
        { type: "localeRichText" }
      ],
      validation: Rule =>
        Rule.length(1)
          .required()
    }
  ]
}
