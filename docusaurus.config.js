// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fall 的笔记本',
  tagline: '未来的前端艺术家',
  url: 'https://fall-zhang.github.io',
  baseUrl: '/my-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: './img/favicon.ico',
  // isMDXComponent: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fall_zhang', // Usually your GitHub org/user name.
  projectName: 'front-end-note', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './my-docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/', // 点击编辑此页的时候弹出的内容
          numberPrefixParser(filename) {
            // // Implement your own logic to extract a potential number prefix
            // const numberPrefix = findNumberPrefix(filename);
            // // Prefix found: return it with the cleaned filename
            // if (numberPrefix) {
            //   return {
            //     numberPrefix,
            //     filename: filename.replace(prefix, ''),
            //   };
            // }
            // No number prefix found
            return { numberPrefix: undefined, filename };
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/', // 点击编辑此页的时候弹出的内容，删除则全删除
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fall 的笔记本',
        logo: {
          alt: 'My Site Logo',
          src: './img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: '笔记',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Fall-zhang',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: true
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: '社区',
            items: [
              {
                label: '掘金',
                href: 'https://juejin.cn/user/1565342280463325',
              },
              {
                label: 'Github',
                href: 'https://github.com/Fall-zhang',
              },
              {
                label: '思否segmentfault',
                href: 'https://segmentfault.com/u/fall_zhang0',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: '微信号：mymicrowings',
                to: '#',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fall. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
