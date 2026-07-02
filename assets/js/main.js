/* ============================================================
   Ксения Теселкина — портфолио
   Вся анимация — vanilla JS: IntersectionObserver + rAF.
   ============================================================ */

(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     i18n
     ============================================================ */
  var I18N = {
    ru: {
      "nav.logo": "Ксения Теселкина",
      "nav.about": "Обо мне",
      "nav.experience": "Опыт",
      "nav.workshops": "Воркшопы",
      "nav.channel": "Канал",
      "nav.contact": "Контакты",

      "hero.eyebrow": "Ксения Теселкина · Москва",
      "hero.line1": "AI-продакт",
      "hero.line2": "менеджер",
      "hero.sub": "Внедряю ИИ в продукты и рабочие процессы команд. Запустила корпоративные AI‑воркшопы для сотрудников VK и научила сотни специалистов применять нейросети в ежедневной работе.",
      "hero.cta1": "Обсудить проект",
      "hero.cta2": "Смотреть воркшопы",
      "hero.stat1": "лет в IT",
      "hero.stat2": "продуктов",
      "hero.stat3": "воркшопов и вебинаров",
      "hero.badge": "AI · ПРОДУКТ · ВОРКШОПЫ · ОБУЧЕНИЕ · ",
      "hero.chip1": "Корп. воркшопы для VK",
      "hero.chip2": "Спикер Flow 2022–2023",
      "hero.scroll": "листайте",

      "about.title": "Продакт, который говорит с ИИ на ты",
      "about.lead": "В IT больше 15 лет: прошла путь от C#-разработчика и системного аналитика до менеджера продукта в VK. Последние два года мой фокус — искусственный интеллект.",
      "about.body": "За плечами 30+ продуктов — от ГИС и финтеха до образовательных платформ. Сегодня внедряю LLM в продуктовые процессы, проектирую AI-агентов и учу команды работать с нейросетями так, чтобы это давало измеримый результат, а не красивые демо. Веду корпоративные курсы и открытые воркшопы: от промпт-инжиниринга до сборки кликабельных прототипов с AI.",
      "about.fact1": "Менеджер продукта VK ID, запуск корпоративных AI-воркшопов",
      "about.fact2": "Ведущий тренер и соавтор курса про AI-driven разработку требований",
      "about.fact3": "Спикер конференций для аналитиков и продактов",

      "exp.title": "Опыт",
      "exp.i1.period": "2021 — сейчас",
      "exp.i1.role": "Менеджер продукта — VK",
      "exp.i1.desc": "Начинала с финтех-сервисов и VK Pay, с 2023 — менеджер продукта в VK ID. Запускаю новые продукты, внедряю AI в процессы команды и веду серию корпоративных воркшопов по нейросетям для сотрудников VK.",
      "exp.i1.tag3": "Обучение команд",
      "exp.i2.period": "с 2018",
      "exp.i2.role": "Тренер и основатель школы — Systems.Education · BeAnalyst",
      "exp.i2.desc": "Основала школу BeAnalyst для начинающих аналитиков. В Systems.Education — соавтор и ведущий тренер курса «AI-driven разработка требований и проектирование решений»: учу IT-специалистов создавать требования с помощью ИИ — без галлюцинаций.",
      "exp.i2.tag1": "Курсы",
      "exp.i2.tag2": "Методология",
      "exp.i3.period": "2022–2023",
      "exp.i3.role": "Спикер — конференции Flow",
      "exp.i3.desc": "Выступления на крупнейшей конференции для системных и бизнес-аналитиков: практика анализа, инструменты, применение AI.",
      "exp.i3.tag1": "Доклады",
      "exp.i3.tag2": "Мастер-классы",
      "exp.i4.period": "2011 — 2021",
      "exp.i4.role": "От разработчика до руководителя отдела аналитики",
      "exp.i4.desc": "C#-разработчик в транспортном моделировании, системный аналитик в 2GIS, руководитель отдела бизнес-анализа в Magora Systems, собственное аналитическое агентство. 20+ проектов для заказчиков из России, США, ОАЭ, ЮАР и Великобритании.",
      "exp.i4.tag3": "Своё агентство",

      "ws.title": "Воркшопы и курсы",
      "ws.sub": "Форматы под задачу: от 2-часового интенсива для команды до многонедельного корпоративного курса.",
      "ws.c1.title": "Корпоративные AI-воркшопы",
      "ws.c1.desc": "Серия обучений для сотрудников компаний: как встроить нейросети в ежедневную работу. Запущено для команд VK.",
      "ws.c1.tag": "формат: корпоративный",
      "ws.c2.title": "AI-driven разработка требований",
      "ws.c2.desc": "Курс Systems.Education: 15 техник выявления и анализа требований с помощью ИИ — с инженерной строгостью, без галлюцинаций.",
      "ws.c2.tag": "формат: онлайн-курс",
      "ws.c3.title": "Кликабельный прототип с AI в Cursor",
      "ws.c3.desc": "Воркшоп: собираем работающий прототип приложения без разработчиков — только идея, Cursor и правильные промпты.",
      "ws.c3.tag": "формат: воркшоп",
      "ws.c4.title": "AI-ассистенты и скиллы",
      "ws.c4.desc": "Практикум по созданию персональных AI-ассистентов: настраиваем агентов под свои задачи и учим их новым навыкам.",
      "ws.c4.tag": "формат: воркшоп",
      "ws.c5.title": "Управление требованиями в Notion",
      "ws.c5.desc": "Мастер-класс: превращаем Notion в единый источник правды по требованиям — структура, шаблоны, связи.",
      "ws.c5.tag": "формат: мастер-класс",
      "ws.c6.title": "Customer Journey Map на практике",
      "ws.c6.desc": "Воркшоп: строим CJM, который команда реально использует, а не вешает на стену. От исследования до инсайтов.",
      "ws.c6.tag": "формат: воркшоп",
      "ws.cta.text": "Нужен воркшоп под вашу команду?",
      "ws.cta.btn": "Собрать программу",

      "ch.title": "AI с Ксенией",
      "ch.desc": "Телеграм-канал про AI без хайпа: разборы инструментов, рабочие промпты, кейсы внедрения нейросетей в продукт и честные выводы — что работает, а что нет.",
      "ch.btn": "Подписаться в Telegram",
      "ch.card.name": "AI с Ксенией",
      "ch.card.sub": "канал · telegram",
      "ch.card.msg1": "Протестировала 5 AI-агентов для продуктовых исследований. Спойлер: работает один 🙂",
      "ch.card.msg2": "Промпт недели: как получить из LLM структуру требований, а не сочинение на вольную тему",
      "ch.card.msg3": "Анонс: открытый воркшоп по AI-ассистентам — регистрация открыта",

      "ct.title": "Давайте поговорим",
      "ct.sub": "Корпоративное обучение, воркшоп для команды, консультация по внедрению AI или выступление на вашей конференции.",
      "ct.tg": "@kt_ai_lab",

      "ft.big": "Ксения Теселкина · ",
      "ft.big2": "Ксения Теселкина · ",
      "ft.copy": "© 2026 Ксения Теселкина",
      "ft.note": "сделано руками, с любовью к деталям",

      "meta.title": "Ксения Теселкина — AI Product Manager"
    },
    en: {
      "nav.logo": "Ksenia Teselkina",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.workshops": "Workshops",
      "nav.channel": "Channel",
      "nav.contact": "Contact",

      "hero.eyebrow": "Ksenia Teselkina · Moscow",
      "hero.line1": "AI Product",
      "hero.line2": "Manager",
      "hero.sub": "I bring AI into products and team workflows. Launched corporate AI workshops for VK employees and taught hundreds of professionals to use neural networks in their daily work.",
      "hero.cta1": "Discuss a project",
      "hero.cta2": "See workshops",
      "hero.stat1": "years in IT",
      "hero.stat2": "products",
      "hero.stat3": "workshops & webinars",
      "hero.badge": "AI · PRODUCT · WORKSHOPS · TRAINING · ",
      "hero.chip1": "Corporate workshops for VK",
      "hero.chip2": "Speaker at Flow 2022–2023",
      "hero.scroll": "scroll",

      "about.title": "A PM who speaks AI fluently",
      "about.lead": "15+ years in IT: from C# developer and systems analyst to product manager at VK. For the past two years my focus has been artificial intelligence.",
      "about.body": "30+ products behind me — from GIS and fintech to educational platforms. Today I integrate LLMs into product processes, design AI agents and teach teams to work with neural networks in a way that delivers measurable results — not just pretty demos. I run corporate courses and public workshops: from prompt engineering to building clickable prototypes with AI.",
      "about.fact1": "Product manager of VK ID, launched corporate AI workshops",
      "about.fact2": "Lead trainer and co-author of the AI-driven requirements course",
      "about.fact3": "Conference speaker for analysts and product managers",

      "exp.title": "Experience",
      "exp.i1.period": "2021 — now",
      "exp.i1.role": "Product Manager — VK",
      "exp.i1.desc": "Started with fintech services and VK Pay; since 2023 — product manager of VK ID. Launching new products, embedding AI into team processes and running a series of corporate AI workshops for VK employees.",
      "exp.i1.tag3": "Team training",
      "exp.i2.period": "since 2018",
      "exp.i2.role": "Trainer & School Founder — Systems.Education · BeAnalyst",
      "exp.i2.desc": "Founded the BeAnalyst school for aspiring analysts. At Systems.Education — co-author and lead trainer of the “AI-driven requirements engineering and solution design” course: teaching IT specialists to craft requirements with AI — hallucination-free.",
      "exp.i2.tag1": "Courses",
      "exp.i2.tag2": "Methodology",
      "exp.i3.period": "2022–2023",
      "exp.i3.role": "Speaker — Flow conferences",
      "exp.i3.desc": "Talks at the largest conference for systems and business analysts: analysis practice, tools, applied AI.",
      "exp.i3.tag1": "Talks",
      "exp.i3.tag2": "Masterclasses",
      "exp.i4.period": "2011 — 2021",
      "exp.i4.role": "From developer to head of analysis",
      "exp.i4.desc": "C# developer in transport modelling, systems analyst at 2GIS, head of business analysis at Magora Systems, my own analytics agency. 20+ projects for clients from Russia, the USA, the UAE, South Africa and the UK.",
      "exp.i4.tag3": "Own agency",

      "ws.title": "Workshops & courses",
      "ws.sub": "Formats that fit the task: from a 2-hour team intensive to a multi-week corporate course.",
      "ws.c1.title": "Corporate AI workshops",
      "ws.c1.desc": "A training series for company employees: how to weave neural networks into everyday work. Launched for VK teams.",
      "ws.c1.tag": "format: corporate",
      "ws.c2.title": "AI-driven requirements engineering",
      "ws.c2.desc": "A Systems.Education course: 15 techniques for eliciting and analysing requirements with AI — with engineering rigour, no hallucinations.",
      "ws.c2.tag": "format: online course",
      "ws.c3.title": "Clickable prototype with AI in Cursor",
      "ws.c3.desc": "Workshop: build a working app prototype without developers — just an idea, Cursor and the right prompts.",
      "ws.c3.tag": "format: workshop",
      "ws.c4.title": "AI assistants & skills",
      "ws.c4.desc": "Hands-on practice in building personal AI assistants: configuring agents for your tasks and teaching them new skills.",
      "ws.c4.tag": "format: workshop",
      "ws.c5.title": "Requirements management in Notion",
      "ws.c5.desc": "Masterclass: turning Notion into a single source of truth for requirements — structure, templates, relations.",
      "ws.c5.tag": "format: masterclass",
      "ws.c6.title": "Customer Journey Map in practice",
      "ws.c6.desc": "Workshop: building a CJM your team will actually use, not hang on the wall. From research to insights.",
      "ws.c6.tag": "format: workshop",
      "ws.cta.text": "Need a workshop tailored to your team?",
      "ws.cta.btn": "Build a program",

      "ch.title": "AI with Ksenia",
      "ch.desc": "A Telegram channel about AI without the hype: tool breakdowns, working prompts, real cases of bringing neural networks into products — and honest takes on what works and what doesn't.",
      "ch.btn": "Subscribe on Telegram",
      "ch.card.name": "AI with Ksenia",
      "ch.card.sub": "channel · telegram",
      "ch.card.msg1": "Tested 5 AI agents for product research. Spoiler: one of them works 🙂",
      "ch.card.msg2": "Prompt of the week: getting structured requirements out of an LLM instead of a free-form essay",
      "ch.card.msg3": "Announcement: open workshop on AI assistants — registration is live",

      "ct.title": "Let's talk",
      "ct.sub": "Corporate training, a team workshop, an AI adoption consultation or a talk at your conference.",
      "ct.tg": "@kt_ai_lab",

      "ft.big": "Ksenia Teselkina · ",
      "ft.big2": "Ksenia Teselkina · ",
      "ft.copy": "© 2026 Ksenia Teselkina",
      "ft.note": "handcrafted, with love for detail",

      "meta.title": "Ksenia Teselkina — AI Product Manager"
    }
  };

  var currentLang = localStorage.getItem("lang") || "ru";

  function applyLang(lang, animate) {
    var dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);

    var swap = function () {
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      document.documentElement.lang = lang;
      document.title = dict["meta.title"];
      document.querySelectorAll(".lang__btn").forEach(function (b) {
        b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      });
      // re-split animated titles after text swap
      splitTitles();
      document.querySelectorAll(".reveal-words").forEach(function (el) {
        if (el.classList.contains("is-visible")) {
          el.querySelectorAll(".word > span").forEach(function (s) { s.style.transform = "translateY(0)"; });
        }
      });
    };

    if (animate && !prefersReduced) {
      document.body.classList.add("is-translating");
      setTimeout(function () {
        swap();
        document.body.classList.remove("is-translating");
      }, 260);
    } else {
      swap();
    }
  }

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang !== currentLang) applyLang(lang, true);
    });
  });

  /* ============================================================
     Split section titles into words for staggered reveal
     ============================================================ */
  function splitTitles() {
    document.querySelectorAll(".reveal-words").forEach(function (el) {
      var text = el.textContent.trim();
      el.textContent = "";
      text.split(/\s+/).forEach(function (word, i) {
        var wrap = document.createElement("span");
        wrap.className = "word";
        var inner = document.createElement("span");
        inner.textContent = word;
        inner.style.transitionDelay = (i * 0.06) + "s";
        wrap.appendChild(inner);
        el.appendChild(wrap);
        el.appendChild(document.createTextNode(" "));
      });
    });
  }

  /* ============================================================
     Intro + initial load
     ============================================================ */
  window.addEventListener("load", function () {
    var intro = document.getElementById("intro");
    var delay = prefersReduced ? 0 : 900;
    setTimeout(function () {
      if (intro) intro.classList.add("is-done");
      document.body.classList.add("is-loaded");
      setTimeout(function () { if (intro) intro.remove(); }, 800);
    }, delay);
  });

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target.hasAttribute("data-count")) animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  splitTitles();
  applyLang(currentLang, false);

  document.querySelectorAll(".reveal, .reveal-line, .reveal-words, [data-count]").forEach(function (el) {
    io.observe(el);
  });

  /* ============================================================
     Counters
     ============================================================ */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) { el.textContent = target + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ============================================================
     Header: shadow + hide on scroll down
     ============================================================ */
  var header = document.getElementById("header");
  var lastY = 0;
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    if (y > 400 && y > lastY + 6) header.classList.add("is-hidden");
    else if (y < lastY - 6 || y < 400) header.classList.remove("is-hidden");
    lastY = y;
  }, { passive: true });

  /* ============================================================
     Mobile menu
     ============================================================ */
  var burger = document.getElementById("burger");
  var mobmenu = document.getElementById("mobmenu");
  function toggleMenu(open) {
    var isOpen = open !== undefined ? open : !mobmenu.classList.contains("is-open");
    mobmenu.classList.toggle("is-open", isOpen);
    burger.classList.toggle("is-open", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
    mobmenu.setAttribute("aria-hidden", !isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  burger.addEventListener("click", function () { toggleMenu(); });
  mobmenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { toggleMenu(false); });
  });

  /* ============================================================
     Missing image handling → keep styled placeholder
     ============================================================ */
  document.querySelectorAll(".photo img").forEach(function (img) {
    function markMissing() { img.classList.add("is-missing"); }
    img.addEventListener("error", markMissing);
    if (img.complete && img.naturalWidth === 0) markMissing();
  });

  if (prefersReduced) return; // no fancy motion below this line

  /* ============================================================
     Custom cursor
     ============================================================ */
  var cursor = document.querySelector(".cursor");
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && cursor) {
    var dot = cursor.querySelector(".cursor__dot");
    var ring = cursor.querySelector(".cursor__ring");
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a, button, .card").forEach(function (el) {
      el.addEventListener("mouseenter", function () { cursor.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { cursor.classList.remove("is-hover"); });
    });
  }

  /* ============================================================
     Magnetic elements
     ============================================================ */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
      var strength = 0.25;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        el.style.transform = "translate(" + x * strength + "px," + y * strength + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "translate(0,0)";
        setTimeout(function () { el.style.transition = ""; }, 500);
      });
    });
  }

  /* ============================================================
     Tilt cards
     ============================================================ */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(700px) rotateX(" + (-py * 5) + "deg) rotateY(" + (px * 5) + "deg) translateY(-4px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
        setTimeout(function () { el.style.transition = ""; }, 600);
      });
    });
  }

  /* ============================================================
     Scroll parallax for decorative elements
     ============================================================ */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  if (parallaxEls.length) {
    var ticking = false;
    function updateParallax() {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.05;
        var r = el.getBoundingClientRect();
        var offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.setProperty("--py", offset.toFixed(1) + "px");
        el.style.translate = "0 " + (-offset).toFixed(1) + "px";
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
    }, { passive: true });
    updateParallax();
  }
})();
