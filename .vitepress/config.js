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
        text: 'v1.0.1',
        items: [
          { text: '更新日志', link: 'https://github.com/top-a/softuseword/commits/main/' },
          { text: '个人介绍', link: 'https://github.com/Front-End-Den' }
        ]
      }
    ],
    sidebar: {
      '/docs/budian/': [
        {
          text: '产品简介',
          items: [
            { text: '官网产品介绍', link: '/docs' },
            { text: '什么是不点外勤?', link: '/docs' },
            { text: '如何获取产品体验', link: '/docs' },
            { text: '快速开始', link: '/docs' },
            { text: 'APP端使用指南', link: '/docs' },
            { text: 'WEB端使用指南', link: '/docs' },
          ]
        },
        {
          text: '功能亮点介绍',
          items: [
            { text: '外勤定位', link: '/docs' },
            { text: '轨迹记录', link: '/docs' },
            { text: '一键拓客', link: '/docs' },
            { text: '轨迹分析', link: '/docs' },
            { text: '联动报销', link: '/docs' },
            { text: '轨迹亮点', link: '/docs' },
          ]
        },
        {
          text: '一站式解决方案',
          items: [
            { text: '传统方案', link: '/docs' },
            { text: 'AI加持方案', link: '/docs' }
          ]
        },
        {
          text: '价格定价',
          items: [
            { text: '常规售价', link: '/docs' },
            { text: 'AI限量尝鲜促销价', link: '/docs' },
            { text: '政企合作优惠', link: '/docs' },
            { text: '校园公益免费', link: '/docs' }
          ]
        },
        {
          text: '包含的服务内容',
          items: [
            { text: '技术支持', link: '/docs' },
            { text: '数据安全', link: '/docs' },
            { text: '免费升级', link: '/docs' },
            { text: '急速专业售后', link: '/docs' },
            { text: '需求定制', link: '/docs' },
            { text: '设备支持', link: '/docs' }
          ]
        },
        {
          text: '软件下载与技术支持',
          items: [
            { text: 'App获取', link: '/docs' },
            { text: '管理端登录', link: '/docs' },
            { text: '常见问题', link: '/docs' },
            { text: '成为合作伙伴', link: '/docs' },
            { text: '联系我们?', link: '/docs' },
          ]
        },
        {
          text: '软件即将支持',
          items: [
            { text: 'AI深度记忆', link: '/docs' },
            { text: 'AI智能分析', link: '/docs' }
          ]
        }
      ],
      '/docs/budian/guide': [
        {
          text: 'APP使用指南',
          items: [
            { text: '获取APP账号体验', link: '/docs/use/guide/getApp' },
            { text: '下载软件并登录', link: '/docs/use/guide/getApp' },
          ]
        },
        {
          text: 'APP权限设置指引',
          items: [
            { text: '小米手机(安卓)', link: '/docs/use/guide/getApp' },
            { text: '华为手机(安卓/鸿蒙)', link: '/docs/use/guide/getApp' },
            { text: 'Vivo手机(安卓)', link: '/docs/use/guide/getApp' },
            { text: '一加手机(安卓)', link: '/docs/use/guide/getApp' },
            { text: '苹果手机(ios)', link: '/docs/use/guide/getApp' },
          ]
        },
        {
          text: 'WEB使用指南',
          items: [
            { text: '获取账号体验', link: '/docs/use/guide/getApp' },
            { text: '登录账号', link: '/docs/use/guide/getApp' },
            { text: '系统首页', link: '/docs/use/guide/getApp' },
            { text: '报表中心', link: '/docs/use/guide/getApp' },
            { text: '考勤管理', link: '/docs/use/guide/getApp' },
            { text: '定位轨迹', link: '/docs/use/guide/getApp' },
            { text: '客户管理', link: '/docs/use/guide/getApp' },
            { text: '拜访管理', link: '/docs/use/guide/getApp' },
            { text: '业务上报', link: '/docs/use/guide/getApp' },
            { text: '行程管理', link: '/docs/use/guide/getApp' },
            { text: '商品管理', link: '/docs/use/guide/getApp' },
            { text: '日常办公', link: '/docs/use/guide/getApp' },
            { text: '审批流程', link: '/docs/use/guide/getApp' },
            { text: '系统配置', link: '/docs/use/guide/getApp' },
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'tiktok', link: 'https://www.douyin.com/' },
      { icon: 'xiaohongshu', link: 'https://www.xiaohongshu.com/' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ],
    footer: {
      message: 'ICP 备案号 渝ICP备20260106001号-1',
      copyright: 'Copyright © 2025-2026 初心不改个人工作室'
    }
  }
}