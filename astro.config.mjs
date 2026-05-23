import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import nauticLogo from './src/assets/nautic.webp';

export default defineConfig({
  site: 'https://docs.nautic-studios.com',
  base: '/',

  integrations: [
    starlight({
      title: 'Nautic Studios',

      logo: {
        light: nauticLogo,
        dark: nauticLogo,
        alt: 'Nautic Studios',
      },

      favicon: '/favicon.svg',

      customCss: ['./src/styles/custom.css'],

      expressiveCode: {
        themes: ['github-dark'],
        styleOverrides: {
          borderRadius: '8px',
          borderColor: '#181b21',
          codeBackground: '#0a0d14',
        },
      },

      lastUpdated: false,

      editLink: {
        baseUrl: 'https://github.com/nauticstudios/Documentation/edit/main/nautic-docs/',
      },

      pagination: true,

      tableOfContents: false,

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/nauticstudios',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/cdT5g5xsVq',
        },
      ],

      components: {
        Footer: './src/components/Footer.astro',
      },

      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Introduction', link: '/start/introduction/' },
          ],
        },
        {
          label: 'Common features',
          items: [
            { label: 'Colors Utils', link: '/common/colors/' },
            { label: 'Discord webhook builder', link: '/common/discord-webhook-builder/' },
          ],
        },
        {
          label: 'Libraries',
          items: [
            {
              label: 'HeadRender',
              link: '/libraries/headrender/',
              badge: { text: 'Library', variant: 'note' },
            },
          ],
        },
        {
          label: 'API',
          items: [
            {
              label: 'AtlasLang',
              link: '/api/atlaslang/',
              badge: { text: 'API', variant: 'caution' },
            },
          ],
        },
        {
          label: 'Plugins',
          items: [
            {
              label: 'NTebexMessage',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/plugins/ntebexmessage/overview/' },
                { label: 'Commands', link: '/plugins/ntebexmessage/commands/' },
                { label: 'Templates', link: '/plugins/ntebexmessage/templates/' },
                { label: 'Buttons', link: '/plugins/ntebexmessage/buttons/' },
                { label: 'Reward event', link: '/plugins/ntebexmessage/reward/' },
                { label: 'Discord webhook', link: '/plugins/ntebexmessage/webhook/' },
                { label: 'Configuration', link: '/plugins/ntebexmessage/configuration/' },
              ],
            },
          ],
        },
        {
          label: 'Work in progress',
          items: [
            { label: 'NTags', link: '/wip/ntags/', badge: { text: 'Experimental', variant: 'danger' } },
            { label: 'NClans', link: '/wip/nclans/', badge: { text: 'Experimental', variant: 'danger' } },
            { label: 'NCrates', link: '/wip/ncrates/', badge: { text: 'Experimental', variant: 'danger' } },
          ],
        },
      ],
    }),
  ],
});
