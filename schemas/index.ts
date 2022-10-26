

const supportedLanguages = [
    {
      code: "en",
      iso: "en-US",
      name: "English",
      file: "en.js",
      isDefault: true,
    },
    {
      code: "es",
      iso: "es-ES",
      name: "Spanish",
      file: "es.js",
    },
  ]


export const schemaTypes = [
  {
    name: 'test',
    title: 'Test',
    type: 'document',
    fields: [
      {
        name: 'sections',
        type: 'array',
        of: [ {
            name: "sectionA",
            type: "object",
            groups: [{name: "a"}, {name: "b"}],
            fields: [
                {
                    name: 'title',
                    type: 'object',
                    group: 'a',
                    fieldsets: [
                      {
                        title: 'Translations',
                        name: 'translations',
                        options: { collapsible: true, collapsed: false },
                      },
                    ],
                    fields: supportedLanguages.map((lang) => ({
                      title: lang.name,
                      name: lang.code,
                      type: 'string',
                      fieldset: lang.isDefault ? null : 'translations',
                    })),
                },
                {
                    name: 'lorem',
                    type: 'string',
                    group: 'b',
                }

            ]
        },
        ],
      },
    ],
  },
]
