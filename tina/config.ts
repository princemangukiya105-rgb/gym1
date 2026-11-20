
import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'home',
        label: 'Homepage',
        path: 'content/home',
        format: 'json',
        match: {
          include: '**',
        },
        fields: [
          {
            type: 'string',
            name: 'heroTitle',
            label: 'Hero Heading',
            required: true,
          },
          {
            type: 'string',
            name: 'heroDescription',
            label: 'Hero Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'heroImage',
            label: 'Hero Background Image URL',
          },
        ],
      },
    ],
  },
});

