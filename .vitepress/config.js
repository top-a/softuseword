export default {
  title: '使用手册',
  description: '这是一个用于项目记录文档、前后端学习记录的手册',
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
      { text: '首页', link: '/' },
      { text: 'AI索引', link: 'https://github.com/LiLittleCat/awesome-free-chatgpt?tab=readme-ov-file' },
      {
        text: 'v1.0.2',
        items: [
          { text: '更新日志', link: 'https://github.com/top-a/softuseword/commits/main/' },
          { text: '个人介绍', link: 'https://github.com/Front-End-Den' }
        ]
      }
    ],
    sidebar: {},
    socialLinks: [
      { icon: 'tiktok', link: 'https://www.douyin.com/' },
      { icon: 'xiaohongshu', link: 'https://www.xiaohongshu.com/' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ],
    footer: {
      message: 'ICP 备案号 渝ICP备00000000000号-0(尝试备案中)',
      copyright: 'Copyright © 2025-2026 ChengYu前端开发'
    }
  }
}