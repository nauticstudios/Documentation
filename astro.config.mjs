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
        themes: ['night-owl'],
        styleOverrides: {
          borderRadius: '0px',
          borderColor: '#2a2c2e',
          codeBackground: '#011627',
          codeFontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
          codeFontSize: '0.9rem',
          codeLineHeight: '1.65',
          frames: {
            shadowColor: 'transparent',
            frameBoxShadowCssValue: 'none',
            editorTabBarBackground: '#111111',
            editorActiveTabBackground: '#181a1b',
            editorActiveTabForeground: '#d6deeb',
            editorActiveTabBorderColor: 'transparent',
            editorActiveTabIndicatorTopColor: '#0088ff',
            editorActiveTabIndicatorBottomColor: 'transparent',
            editorActiveTabIndicatorHeight: '2px',
            editorTabBarBorderBottomColor: '#2a2c2e',
            editorTabBorderRadius: '0px',
            terminalBackground: '#011627',
            terminalTitlebarBackground: '#181a1b',
            terminalTitlebarForeground: '#d6deeb',
            terminalTitlebarBorderBottomColor: '#2a2c2e',
            tooltipSuccessBackground: '#0088ff',
          },
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
