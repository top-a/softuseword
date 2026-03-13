export default {
  title: '爱丽丝的手札笔记',
  description: '这是一个用于资源分享文档',
  lnag: 'zh-CN',
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }] // 使用绝对路径
  ],
  themeConfig: {
    i18nRouting: true,
    logo: "/logo.png",
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'v1.0.2', link: '/#' }
    ],
    sidebar: {},
    socialLinks: [
      { icon: 'telegram', link: 'https://www.telegram.com/' },
      { icon: 'twitter', link: 'https://www.twitter.com/' },
      { icon: 'onlyfans', link: 'https://www.onlyfans.com/' },
      { icon: 'tiktok', link: 'https://www.douyin.com/' },
    ],
    footer: {
      message: '免责申明：本网站受美利坚法律保护，我们无法阻止访问者的行为，因此产生的任何后果由您自行负责',
      copyright: "Copyright © 2025-2026 Alice's home"
    }
  }
}