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

      customCss: ['./src/styles/custom.css'],

      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            { label: 'Introduction', link: '/welcome/introduction' },
            {
              label: 'Features In All Plugins',
              collapsed: true,
              items: [
                { label: 'AtlasLang', link: '/welcome/features/atlaslang' },
                { label: 'Colors', link: '/welcome/features/colors' },
                { label: 'Item Builder', link: '/welcome/features/item-builder' },
                { label: 'Discord Webhook Builder', link: '/welcome/features/discord-webhook-builder' },
              ],
            },
          ],
        },
        {
          label: 'Plugins',
          collapsed: false,
          items: [
            {
              label: 'NHubPvP',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/plugins/nhubpvp/overview' },
                { label: 'Commands', link: '/plugins/nhubpvp/commands' },
                { label: 'PvP System', link: '/plugins/nhubpvp/pvp' },
                { label: 'Ability', link: '/plugins/nhubpvp/ability' },
                { label: 'Stats System', link: '/plugins/nhubpvp/stats' },
                { label: 'Placeholders', link: '/plugins/nhubpvp/placeholders' },
                { label: 'Editor Menu', link: '/plugins/nhubpvp/editor' },
                { label: 'Configuration', link: '/plugins/nhubpvp/configuration' },
              ],
            },
            {
              label: 'NChestRefill',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/plugins/nchestrefill/overview' },
                { label: 'Performance', link: '/plugins/nchestrefill/performance' },
                { label: 'Commands', link: '/plugins/nchestrefill/commands' },
                { label: 'Time', link: '/plugins/nchestrefill/time' },
                { label: 'Editor', link: '/plugins/nchestrefill/editor' },
                { label: 'View Mode', link: '/plugins/nchestrefill/view' },
                { label: 'Holograms', link: '/plugins/nchestrefill/holograms' },
                { label: 'Configuration', link: '/plugins/nchestrefill/config' },
              ],
            },
            {
              label: 'NTebexMessage',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/plugins/ntebexmessage/overview' },
                { label: 'Commands', link: '/plugins/ntebexmessage/commands' },
                { label: 'Templates', link: '/plugins/ntebexmessage/templates' },
                { label: 'Buttons', link: '/plugins/ntebexmessage/buttons' },
                { label: 'Reward Event', link: '/plugins/ntebexmessage/reward' },
                { label: 'Discord Webhook', link: '/plugins/ntebexmessage/webhook' },
                { label: 'Configuration', link: '/plugins/ntebexmessage/configuration' },
              ],
            },
          ],
        },
        {
          label: 'Work In Progress',
          collapsed: false,
          items: [
            {
              label: 'NPlugin',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/plugins/nplugin' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});