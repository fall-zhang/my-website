// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants'
import { themes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config:Config = {
  title: 'Fall 的笔记本',
  tagline: '未来的前端艺术家',
  url: 'https://fall-zhang.github.io',
  baseUrl: '/',
  // baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: './svg/fallen_leaf.svg',
  // isMDXComponent: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fall_zhang', // Usually your GitHub org/user name.
  projectName: 'front-end-note', // Usually your repo name.
  // 实验特性
  future: {
    experimental_faster: {
      swcJsLoader: true, // Use SWC to transpile JS (instead of Babel)
      swcJsMinimizer: true, //  Use SWC to minify JS (instead of Terser)
      swcHtmlMinimizer: true, // Use SWC to minify HTML and inlined JS/CSS (instead of html-minifier-terser)
      lightningCssMinimizer: true, // Use Lightning CSS to minify CSS (instead of cssnano and clean-css)
      rspackBundler: true, // Use Rspack to bundle your app (instead of webpack)
      mdxCrossCompilerCache: true // Compile MDX files once for both browser/Node.js environments instead of twice
    }
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './my-docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fall-zhang/fall-zhang.github.io/tree/source', // 点击编辑此页的时候弹出的内容
          numberPrefixParser (filename) {
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
            return { numberPrefix: undefined, filename }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/fall-zhang/fall-zhang.github.io/tree/source' // 点击编辑此页的时候弹出的内容
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      } satisfies Preset.Options
    ]
  ],
  markdown: {
    mdx1Compat: {
      comments: true, // 允许在 mdx 中使用 HTML
      admonitions: false, // 允许自定义模块宽松的模式 :::title my title -> :::title [my title]
      headingIds: true
    }
  },

  themeConfig: {
    navbar: {
      title: 'Fall 的笔记本',
      logo: {
        alt: 'My Site Logo',
        src: './svg/boy_avatar.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: '笔记'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/fall-zhang',
          label: 'GitHub',
          position: 'right'
        }
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
              href: 'https://juejin.cn/user/1565342280463325'
            },
            {
              label: 'Github',
              href: 'https://github.com/fall-zhang'
            },
            {
              label: '思否 SegmentFault',
              href: 'https://segmentfault.com/u/fall_zhang0'
            }
          ]
        },
        {
          title: '联系',
          items: [
            {
              label: '微信号：mymicrowings',
              to: '#'
            },
            {
              label: 'Docusaurus',
              href: 'https://github.com/facebook/docusaurus'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fall. Built with Docusaurus.<br><a href="https://beian.miit.gov.cn">豫ICP备2025114533号</a>`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '65516RYDMQ',

      // Public API key: it is safe to commit it
      apiKey: 'ef33d89a3cd0aef85051088a6c9a47be',

      indexName: 'fall_zhang_github_io_65516rydmq_pages',

      // Optional: see doc section below
      // contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/'
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false

      // ... other Algolia params
    }
  } satisfies Preset.ThemeConfig,
  plugins: [
    // tailwindcss 的插件
    function tailwindPlugin (context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss (postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(['@tailwindcss/postcss', {}])
          return postcssOptions
        }
      }
    }
  ]
  // scripts: [
  //   // giscus 第三方开源评论模块
  //   {
  //     src: 'https://giscus.app/client.js',
  //     'data-repo': 'fall-zhang/fall-zhang.github.io',
  //     'data-repo-id': 'R_kgDOHd9XKQ',
  //     'data-category': 'Announcements',
  //     'data-category-id': 'DIC_kwDOHd9XKc4Ctw9F',
  //     'data-mapping': 'pathname',
  //     'data-strict': '0',
  //     'data-reactions-enabled': '1',
  //     'data-emit-metadata': '0',
  //     'data-input-position': 'top',
  //     'data-theme': 'preferred_color_scheme',
  //     'data-lang': 'zh-CN',
  //     'data-loading': 'lazy',
  //     crossOrigin: 'anonymous',
  //     async: true
  //   }
  // ]
}

export default config
