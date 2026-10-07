// data.js —— 网站的全部内容。第三维度的产物：改这里 = 改网站。
// 用 site/admin.html 编辑并导出，或直接手改这个文件。
window.SITE = {
  birth: "2002-02-17",
  email: "wawahp888@gmail.com",
  // 名字下面的一句话
  tagline: [
    "致敬，那些，逝去日子"
  ],
  // 第一屏定位句（名字/口号下方）
  positioning: "AI 提示词工程师。现在在卖一种能自己验证的鲜牛奶。",
  // 三问板块：每条 = 钉子(meta) + 内容；tags 供子页面浮出用
  asks: [
    { section: "我能帮你解决什么", tags: ["milk","ai"], lines: [
      { nail: "先别做内容。", text: "你的产品没问题，问题是没人知道。做内容之前，先搞清楚谁要什么——这事我用 AI 跑通了，月子中心那套就是这么来的。" },
      { nail: "也卖牛奶。", text: "鲜不鲜，你自己验证。" }
    ]},
    { section: "凭什么信我", tags: ["life","ai"], lines: [
      { nail: "说真话的成本，是这个时代最高的。", text: "所以我不用说的。73 块加 9 个钢镚的日子我记着，连着两年年入 20 万也记着。" },
      { nail: "", text: "每一周的日历都挂在上面——骗你容易，骗它难。" }
    ]},
    { section: "我会什么", tags: ["ai"], lines: [
      { nail: "别听人说他懂 AI，要看交付物。", text: "903 份资料洗出 8257 条需求，13 个环节的流水线，做成了双击就能用的 Mac 软件。" },
      { nail: "", text: "踩坑换来的 6 套方法论，全在这个网站上。" },
      { nail: "作品。", text: "给朋友定制的卡片生成提示词、AI 应用原型图——她说：原来专业做提示词，效果可以达到这样。" }
    ]}
  ],
  // 做过的事：网站「做过的事」板块，name/effect/pit 各一句
  projects: [
    { time: "2026.04 – 06", name: "宠物旅游", effect: "2286 条评论洗出 49 条真需求，18 篇文案改到第四版。", pit: "内容全对了，获客还是零——渠道错了，写再多也对不了。" },
    { time: "2026.06", name: "AI 营销系统", effect: "从 903 份资料里洗出 8257 条真实需求，流水线跑通了一半。", pit: "卡在发布环节——做完系统才发现，最难的从来不是技术，是敢发。" },
    { time: "2026.06", name: "需求提取系统", effect: "903 个表格变成一个双击就能用的 Mac 应用。", pit: "写到 80% 才明白，剩下 20% 的难度是别人的数据太脏。" },
    { time: "2026.07", name: "菲律宾选品 / Lemon8", effect: "23 款选品，连节日是真节日都做了核验。", pit: "全停在\u201c待找图\u201d——研究做得越细，出发得越晚。" },
    { time: "2026.07 – 至今", name: "内容选题系统（月子中心）", effect: "351 条人群需求撞上 65 项服务，筛出 43 个选题公式。", pit: "覆盖率实测 48%——另一半在老板脑子里，表填不出来。" }
  ],
  // 微信：qr 填文件名（放 site/assets/），handle 是微信号显示名
  wechat: { qr: "wechat-qr.png", handle: "@三禹" },
  // 联系：一键直达；href 留空则灰显不可点
  contacts: [
    { label: "邮件", href: "mailto:wawahp888@gmail.com" },
    { label: "小红书", href: "" },
    { label: "X", href: "" }
  ],
  // 最近 7 年：花时间最长的事，上限 3 条
  longterm: [
    {
      years: "2020 — 2023",
      title: "高速铁道技术",
      desc: "三年。"
    },
    {
      years: "2023.11 — 2026.03",
      title: "AI 营销与提示词工程",
      desc: "远程。为客户从 0 到 1 搭建 AI 内容生成系统，也在这里练出了自己的手艺。"
    },
    {
      years: "2025.06 — 至今",
      title: "自己的 AI 营销数据系统",
      desc: "从社交平台采集评论，分析、分类，产出结构化需求清单。沉淀 37000 条需求数据。"
    }
  ],
  // 记录：出现在周历上的事
  // date 支持 "YYYY-MM-DD"（单周）和 "YYYY-MM"（整月亮带）
  // importance: record / important / major；photo 可选，填图片文件名
  // freq: 念头出现次数（高频优先，默认 1）；stage: true 表示阶段性事件（出国、成家、入师门、做生意等转折）
  // 「今年」板块自动取当前年份的记录，上限 7 条
  records: [
    { date: "2019-01", importance: "record", text: "寒假摆水果摊。自己进货、自己定价、自己看摊，面对面对客销售。", photo: "" },
    { date: "2019-07", importance: "record", text: "暑假做电话销售，开发客户、介绍课程、处理异议。拒绝听了很多。", photo: "" },
    { date: "2020-09-01", importance: "record", text: "开学，读高速铁道技术。", photo: "" },
    { date: "2023-06", importance: "record", text: "专科毕业。", photo: "" },
    { date: "2023-11", importance: "important", text: "开始远程做 AI 营销与提示词工程，为客户从 0 到 1 搭建 AI 内容生成系统。", photo: "" },
    { date: "2025-06", importance: "important", text: "开始做自己的 AI 营销数据系统：从社交平台采集评论，分析、分类，产出结构化需求清单。", photo: "" },
    { date: "2026-02-18", importance: "record", text: "写给临终前的自己：我受不了自己散漫的样子。这种不满意，也是推着我行动的一股力。", photo: "" },
    { date: "2026-03", importance: "record", text: "目前主要靠接 AI 工作流和营销文案的单子生活。", photo: "" },
    { date: "2026-07", importance: "record", text: "试了一段时间芯片终端销售，然后归档。", photo: "" },
    { date: "2026-08-05", importance: "major", stage: true, text: "第一次认真好奇：别的国家，到底是什么样子？", photo: "" },
    { date: "2026-08-06", importance: "record", text: "在小红书发出第一条内容：「怎么在海外获客啊？」阅读量 1。", photo: "" },
    { date: "2026-10-01", importance: "record", text: "这个网站上线了。", photo: "" }
  ]
};
