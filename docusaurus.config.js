/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Grasplabs DAAS',
  tagline: 'Enabling companies to develop centralized financial data solution.',
  url: 'https://grasplabs.no',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'grasplabs',
  projectName: 'daas-docs',
  themeConfig: {
    navbar: {
      title: 'Grasplabs DAAS Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'samples/index',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/samples/index',
            },
          ],
        },
        {
          title: 'Grasplabs DAAS',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/grasp-labs/daas-docs.git',
            },
            {
              label: 'Grasplabs',
              href: 'https://grasplabs.no',
            }
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grasplabs, AS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
