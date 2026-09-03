(function () {
  var STORAGE_KEY = "moore-lang";

  var dict = {
    zh: {
      "nav.home": "首页",
      "nav.about": "公司简介",
      "nav.business": "主营业务",
      "nav.contact": "联系我们",
      "brand": "长沙摩尔信息科技有限公司",
      "footer": "© 2026 长沙摩尔信息科技有限公司 版权所有",

      "index.title": "摩尔信息科技 - 首页",
      "index.heroBrand": "摩尔信息科技",
      "index.heroTitle": "以技术构建企业数字化底座",
      "index.heroDesc": "专注移动应用研发与数字化技术服务，为企业交付可落地的完整解决方案。",
      "index.ctaBusiness": "了解业务",
      "index.ctaContact": "联系我们",
      "index.advTitle": "我们的优势",
      "index.advDesc": "从产品研发到持续运维，覆盖数字化落地全链路。",
      "index.f1Title": "移动应用研发",
      "index.f1Desc": "移动端 App 定制开发，跨平台技术落地，满足企业数字化业务需求。",
      "index.f2Title": "数字化解决方案",
      "index.f2Desc": "面向各行业提供数字化转型技术支持，提升企业运营效率。",
      "index.f3Title": "技术运维支持",
      "index.f3Desc": "7×24 技术保障，产品上线后持续迭代维护，保障业务稳定运行。",
      "index.bandTitle": "准备启动下一个数字化项目？",
      "index.bandDesc": "告诉我们你的业务场景，我们给出可落地的技术路径。",
      "index.bandCta": "立即咨询",

      "about.title": "公司简介 - 摩尔信息科技",
      "about.hero": "公司简介",
      "about.heroSub": "技术驱动 · 稳健交付 · 长期陪伴",
      "about.leadStrong": "长沙摩尔信息科技有限公司",
      "about.lead": "坐落于长沙星沙核心商圈，是一家深耕软件与信息技术领域的科创企业。公司专注数字化技术研发与落地服务，具备成熟的技术研发与项目实施能力。主营基础及支撑软件、应用软件开发，提供软件技术转让与技术服务；开展人脸识别、积分管理软件研发，AR/VR 制作、人工智能应用，电商与网络平台建设、系统集成、信息技术咨询等业务。企业坚持合规经营，以技术创新为内核，为各行业输出稳定高效的信息化解决方案。",
      "about.vTitle": "企业愿景",
      "about.vDesc": "以技术驱动创新，用可靠产品帮助企业完成数字化升级，坚持稳定、安全、高效的技术服务理念。",
      "about.tTitle": "团队实力",
      "about.tDesc": "团队拥有多年移动端、Web 端项目开发经验，承接过多行业数字化项目，重视产品质量与信息安全，为客户提供长期稳定技术支撑。",

      "business.title": "主营业务 - 摩尔信息科技",
      "business.hero": "主营业务",
      "business.heroSub": "覆盖研发、平台建设与持续运维",
      "business.s1Title": "移动 App 定制开发",
      "business.s1Desc": "iOS、安卓原生及跨平台应用开发，面向企业业务场景定制开发各类移动应用，完成产品从需求、设计到上线完整流程。",
      "business.s2Title": "Web 管理系统开发",
      "business.s2Desc": "企业后台管理系统、官网、业务平台开发，实现业务数据管理、流程管控，适配电脑与移动端访问。",
      "business.s3Title": "数字化转型技术服务",
      "business.s3Desc": "为传统企业提供数字化改造方案，包含技术咨询、系统对接、数据服务，帮助企业提升业务效率。",
      "business.s4Title": "软件运维与技术支持",
      "business.s4Desc": "软件上线后持续维护、版本迭代、故障排查，提供长期技术保障，保障业务系统稳定运行。",

      "contact.title": "联系我们 - 摩尔信息科技",
      "contact.hero": "联系我们",
      "contact.heroSub": "业务咨询与合作对接",
      "contact.company": "长沙摩尔信息科技有限公司",
      "contact.addrLabel": "地址",
      "contact.addr": "湖南省长沙县金井镇惠农村楼利坡组101",
      "contact.emailLabel": "邮箱",
      "contact.timeLabel": "时间",
      "contact.time": "周一至周五 9:00–18:00"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.business": "Services",
      "nav.contact": "Contact",
      "brand": "Changsha Moore Information Technology Co., Ltd.",
      "footer": "© 2026 Changsha Moore Information Technology Co., Ltd. All rights reserved.",

      "index.title": "Moore Tech - Home",
      "index.heroBrand": "Moore Tech",
      "index.heroTitle": "Building the digital foundation for enterprise growth",
      "index.heroDesc": "Focused on mobile app development and digital technology services, delivering end-to-end solutions that ship.",
      "index.ctaBusiness": "Our Services",
      "index.ctaContact": "Contact Us",
      "index.advTitle": "Our Strengths",
      "index.advDesc": "From product development to ongoing operations — full-stack digital delivery.",
      "index.f1Title": "Mobile App Development",
      "index.f1Desc": "Custom mobile apps and cross-platform delivery to meet enterprise digital needs.",
      "index.f2Title": "Digital Solutions",
      "index.f2Desc": "Digital transformation support across industries to improve operational efficiency.",
      "index.f3Title": "Technical Operations",
      "index.f3Desc": "24/7 technical assurance with continuous iteration after launch for stable operations.",
      "index.bandTitle": "Ready to start your next digital project?",
      "index.bandDesc": "Tell us your business scenario — we’ll map a practical technical path.",
      "index.bandCta": "Get in Touch",

      "about.title": "About - Moore Tech",
      "about.hero": "About Us",
      "about.heroSub": "Tech-driven · Reliable delivery · Long-term partnership",
      "about.leadStrong": "Changsha Moore Information Technology Co., Ltd.",
      "about.lead": "Located in the Xingsha business district of Changsha, we are a technology company focused on software and IT. We specialize in digital R&D and implementation, with mature development and project delivery capabilities. Our work covers foundational and application software, technology transfer and services, face recognition and points management systems, AR/VR and AI applications, e-commerce platforms, system integration, and IT consulting. We operate with compliance and innovation at the core, delivering stable and efficient information solutions across industries.",
      "about.vTitle": "Vision",
      "about.vDesc": "Drive innovation through technology and help enterprises upgrade digitally with reliable products — stable, secure, and efficient.",
      "about.tTitle": "Team",
      "about.tDesc": "Our team brings years of mobile and web experience across industries, with a strong focus on product quality and information security for long-term support.",

      "business.title": "Services - Moore Tech",
      "business.hero": "Services",
      "business.heroSub": "Development, platforms, and ongoing operations",
      "business.s1Title": "Custom Mobile App Development",
      "business.s1Desc": "Native iOS/Android and cross-platform apps tailored to enterprise scenarios — from requirements and design to launch.",
      "business.s2Title": "Web Management Systems",
      "business.s2Desc": "Admin systems, corporate sites, and business platforms for data management and process control, desktop and mobile ready.",
      "business.s3Title": "Digital Transformation Services",
      "business.s3Desc": "Digital upgrade programs for traditional enterprises — consulting, system integration, and data services to boost efficiency.",
      "business.s4Title": "Software Ops & Support",
      "business.s4Desc": "Post-launch maintenance, version iteration, and troubleshooting for long-term system stability.",

      "contact.title": "Contact - Moore Tech",
      "contact.hero": "Contact",
      "contact.heroSub": "Business inquiries and partnership",
      "contact.company": "Changsha Moore Information Technology Co., Ltd.",
      "contact.addrLabel": "Address",
      "contact.addr": "Group 101, Louli Slope, Hui Nong Village, Jinjing Town, Changsha County, Hunan",
      "contact.emailLabel": "Email",
      "contact.timeLabel": "Hours",
      "contact.time": "Mon–Fri 9:00–18:00"
    }
  };

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "zh" ? saved : "zh";
  }

  function applyLang(lang) {
    var pack = dict[lang] || dict.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    var titleKey = document.documentElement.getAttribute("data-i18n-title");
    if (titleKey && pack[titleKey]) document.title = pack[titleKey];
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    var switcher = document.querySelector(".lang-switch");
    if (switcher) {
      switcher.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-lang]");
        if (!btn) return;
        applyLang(btn.getAttribute("data-lang"));
      });
    }
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
