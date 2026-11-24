/* =========================================================================
 *  个人主页内容配置文件 —— 日常更新只需要修改这个文件
 *
 *  - 字段留空 ""、或整个板块数组为空 []，页面上就不会显示该项/该板块
 *  - 文本中可以直接写简单的 HTML，例如 <a href="...">链接</a>、<b>加粗</b>
 *  - 图片放到 assets/img/ 目录，然后写相对路径，如 "assets/img/avatar.jpg"
 *  - 修改后刷新浏览器即可看到效果（直接双击 index.html 打开也可以）
 * ========================================================================= */

window.SITE = {
  /* ---------------- 基本信息 ---------------- */
  profile: {
    name: "Xinze Liu",
    nameAlt: "",                           // 中文名，如 "张三"；留空则不显示
    title: "Undergraduate Student",
    affiliation: "Peking University",
    avatar: "",                            // 如 "assets/img/avatar.jpg"；留空则显示姓名首字母
    email: "xinzeliu@stu.pku.edu.cn",
    // 链接：不需要的留空即可
    links: {
      "Google Scholar": "",
      "GitHub": "https://github.com/Janzaak",
      "Twitter / X": "",
      "CV": "",                             // 如 "assets/cv.pdf"
    },
  },

  /* ---------------- 个人简介 ---------------- */
  bio: [
    "I am an undergraduate student at <b>Peking University</b>. My research interests lie in <b>Embodied AI</b>, " +
    "including robot learning, robotic manipulation, and vision-language-action models.",
    "My goal is to build general-purpose robots that can perceive, reason, and act in the open physical world.",
    // 每一段写成一个字符串，可以继续添加
  ],

  // 研究兴趣标签，可留空 []
  interests: ["Embodied AI", "Robot Learning", "Manipulation", "Vision-Language-Action"],

  /* ---------------- 动态 / News ---------------- */
  // 按时间倒序写，最新的放最上面
  news: [
    { date: "2026.11", text: "Launched my personal homepage." },
    // { date: "2026.09", text: "Our paper <i>XXX</i> is accepted to <b>ICRA 2027</b>!" },
  ],

  /* ---------------- 论文 / Publications ---------------- */
  // authors 中与 profile.name 相同的名字会自动加粗
  // 作者名后加 * 表示共同一作，加 † 表示通讯作者
  // links 里不需要的可以删掉；highlight: true 会在左侧加一条强调线
  publications: [
    // {
    //  title: "Your Paper Title Goes Here",
    //   authors: ["Xinze Liu", "Coauthor A", "Advisor B"],
    //   venue: "Under Review",
    //   year: "2026",
    //   image: "",                           // 论文配图/teaser，如 "assets/img/paper1.png"
    //   links: {
    //     Paper: "",
    //     arXiv: "",
    //     Code: "",
    //     Project: "",
    //     Video: "",
    //   },
    //   note: "",                            // 可选，如 "Oral Presentation"
    //   highlight: true,
    // },
  ],

  /* ---------------- 项目 / Projects ---------------- */
  projects: [
    // {
    //   title: "Example Project",
    //   period: "2026",
    //   description: "A short description of the project: what problem it solves and what you did.",
    //   image: "",
    //   links: { Code: "", Demo: "" },
    // },
  ],

  /* ---------------- 教育经历 ---------------- */
  education: [
    {
      school: "Peking University",
      degree: "B.S. in Computer Science and Technology",               // 请改成你的专业
      period: "2024 – Present",
      detail: "",                          // 可选，如 "GPA: 3.9/4.0"
    },
  ],

  /* ---------------- 科研经历 ---------------- */
  experience: [
    // {
    //   org: "XXX Lab, Peking University",
    //   role: "Research Intern",
    //   period: "2025.03 – Present",
    //   detail: "Advisor: Prof. XXX. Working on ...",
    // },
  ],

  /* ---------------- 荣誉奖项 ---------------- */
  honors: [
    // { date: "2025", text: "Merit Student, Peking University" },
  ],

  /* ---------------- 页脚 ---------------- */
  footer: "Last updated: Nov 2026",
};
