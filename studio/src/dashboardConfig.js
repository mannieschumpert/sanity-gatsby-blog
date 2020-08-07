export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2d4e9236a7b0016614820e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6q1tswj2',
                  apiId: '9f81735c-3895-4ac3-9534-1fdc90b292ae'
                },
                {
                  buildHookId: '5f2d4e925b9bf00092fd63e2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-x6xq33hg',
                  apiId: '5e3227db-048a-4dc9-b2cf-cc2adc35ebbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mannieschumpert/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-x6xq33hg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
