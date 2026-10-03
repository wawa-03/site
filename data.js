// data.js —— 网站的全部内容。第三维度的产物：改这里 = 改网站。
// 用 site/admin.html 编辑并导出，或直接手改这个文件。
window.SITE = {
  birth: "2002-02-17",
  email: "wawahp888@gmail.com",
  // 名字下面的一句话
  tagline: [
    "致敬，那些，逝去日子"
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
