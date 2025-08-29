import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Env-Guardian',
  tagline: "Don't let secrets sneak by and get published, scan your project with env-guardian!",
  favicon: 'img/favicon.ico',

  // Future flags for forward compatibility
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://env-guardian.online',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'JasonKentDotDev', // GitHub org/user
  projectName: 'env-guardian', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/JasonKentDotDev/env-guardian/tree/main/docs/',
        },
        blog: {
          blogTitle: 'Env Guardian Changelog',
          blogDescription: 'Track all notable changes to env-guardian.',
          routeBasePath: 'changelog', // 👈 changelog lives here
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/JasonKentDotDev/env-guardian/tree/main/changelog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'vercel-analytics',
      {
        mode: 'auto',
        debug: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/env-guardian.png',
    navbar: {
      title: 'env-guardian',
      logo: {
        alt: 'env-guardian shield',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/changelog', label: 'Changelog', position: 'left' },
        {
          href: 'https://github.com/JasonKentDotDev/env-guardian',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              href: 'https://github.com/JasonKentDotDev/env-guardian/discussions',
              label: 'Discussions',
            },
            {
              href: 'https://github.com/JasonKentDotDev/env-guardian',
              label: 'GitHub',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Changelog', to: '/changelog' },
            { label: 'NPM', href: 'https://npmjs.com/@jkdd/env-guardian'}
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JasonKentDotDev. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
