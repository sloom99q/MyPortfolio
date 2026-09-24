import { createContext, useContext, useEffect, useMemo, useState } from "react";

// ---------------------------------------------------------------------------
// Lightweight i18n: no dependency, tiny bundle. `t` is the active dictionary.
// Access strings directly (t.hero.title) and arrays (t.work.projects).
// ---------------------------------------------------------------------------

export const DICT = {
  en: {
    dir: "ltr",
    langName: "English",
    other: "العربية",
    nav: {
      links: [
        { label: "Projects", href: "#work" },
        { label: "Why Me", href: "#why" },
        { label: "About", href: "#about" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Let's Talk",
      chapters: [
        "Available For Work",
        "Stuff I'm Proud Of",
        "My Honest Pitch",
        "The Human Behind",
        "Let's Talk Numbers",
        "The Fine Print",
        "Your Turn",
      ],
    },
    hero: {
      helloPrefix: "Hello, I'm",
      name: "Salem",
      title1: "Obsesses over pixels.",
      title2: "Ships real products.",
      ctaTitle: "Book a Free Call",
      ctaSub: "Free 15-min intro call",
      fontLabel: "Font",
      langLabel: "Language",
    },
    work: {
      eyebrow: "Selected Work",
      title1: "Websites",
      afterIcon: "that",
      title2: "won the client.",
      view: "View project",
      detail: {
        overview: "Overview",
        services: "What I did",
        highlights: "Highlights",
        result: "Result",
        role: "Role",
        year: "Year",
        visit: "Visit live site",
        book: "Start a project like this",
        back: "Back to projects",
        notLive: "Unfortunately, this one isn't live yet.",
      },
      projects: [
        {
          name: "Marina Decor",
          blurb:
            "A dark, elegant site for a UAE interior fit-out studio — residential and commercial projects, materials, and finishes shown at their best.",
          meta: "Web • Interior Fit-Out • 2025",
          tags: ["Featured", "Live", "Bilingual"],
          role: "Design & Build",
          year: "2025",
          services: ["UX Design", "Front-end", "CMS", "SEO"],
          overview:
            "Marina Decor shapes considered residential and commercial spaces across the UAE. I built a moody, image-first site that lets their projects, joinery, and finishes carry the story — fast, bilingual, and easy to update.",
          highlights: [
            "Cinematic, image-led project galleries",
            "Bilingual, right-to-left ready from day one",
            "One-click content editing through a simple dashboard",
          ],
          result: "Enquiries doubled in the first month.",
        },
        {
          name: "ZAN",
          blurb:
            "An e-commerce brand for premium self-tan — a cinematic beach hero, a shoppable catalog, and a full admin dashboard.",
          meta: "E-commerce • Beauty & Lifestyle • 2025",
          tags: ["Featured", "E-commerce", "Dashboard"],
          role: "Design & Build",
          year: "2025",
          services: ["UX Design", "Front-end", "E-commerce", "Dashboard"],
          overview:
            "ZAN is a self-tan brand with a beach-lifestyle soul. I designed and built it end to end — a cinematic full-bleed hero, a shoppable products section, rich product pages, an editorial info section, and an admin dashboard to manage products and orders.",
          highlights: [
            "Cinematic full-bleed hero and product photography",
            "Full shop: catalog, product pages, and cart",
            "Admin dashboard to manage products and orders",
          ],
          result: "A complete storefront, launched end to end.",
        },
        {
          name: "Amolfi Studio",
          blurb:
            "A dark, timeless site for a residential interior studio — craftsmanship and calm, front and centre.",
          meta: "Web • Residential • 2024",
          tags: ["Featured", "Responsive", "Fast"],
          role: "Design & Build",
          year: "2024",
          services: ["UX Design", "Front-end", "Motion", "SEO"],
          overview:
            "Amolfi Studio creates timeless residential interiors. I built a moody, confident site where big type and full-bleed imagery let the craftsmanship speak — refined, fast, and unmistakably premium.",
          highlights: [
            "Full-bleed imagery with oversized type",
            "Smooth, considered micro-interactions",
            "Optimised to load fast on any device",
          ],
          result: "Consultation bookings up 45%.",
        },
        {
          name: "Velum",
          blurb:
            "An editorial portfolio for an architecture and interiors practice — a considered collection of spaces.",
          meta: "Web • Architecture • 2024",
          tags: ["Portfolio", "Editorial", "CMS"],
          role: "Design & Build",
          year: "2024",
          services: ["UX Design", "Front-end", "CMS", "SEO"],
          overview:
            "Velum needed a portfolio as calm and precise as their buildings. I built a light, editorial grid that lets each project breathe — clean typography, generous space, and a gallery that scales as their work grows.",
          highlights: [
            "Editorial, gallery-first project grid",
            "Calm typography with generous spacing",
            "Scales effortlessly as projects are added",
          ],
          result: "Project enquiries up 2×.",
        },
      ],
    },
    why: {
      eyebrow: "Why me?",
      title1: "Work with the builder,",
      title2: "not an agency.",
      aTitle: "Quality you can feel",
      aText: "Considered work with real craft. Every detail earns its place, and it holds up on real devices.",
      bTitle: "I don't stop at v1",
      bText: "You get a few directions to react to, then we sharpen the winning one together.",
      planTitle: "One simple plan.",
      planText: "No confusing tiers. Clear pricing.",
      planName: "Website Partner",
      planDesc: "Design and build, handled end to end.",
      join: "Start Today",
      proof: "+20 Happy Clients",
      years: "Years of experience",
      websites: "Websites shipped",
      happyTitle: "Happy Clients",
      happyText: "Clients who keep coming back.",
      quote:
        "\"Salem rebuilt our site in two weeks and enquiries doubled. Fast, sharp, zero hassle.\"",
      quoteName: "Layla H.",
      quoteRole: "Founder, Marina Decor",
    },
    about: {
      eyebrow: "Who am I",
      title: "The person behind the screen",
      stack: "What I bring",
      skills: [
        { label: "React", color: "#61dafb" },
        { label: "SEO", color: "#10b981" },
        { label: "Responsive", color: "#3b82f6" },
        { label: "Fast Loading", color: "#f59e0b" },
        { label: "Bilingual", color: "#a855f7" },
      ],
      cmd: "whoami --verbose",
      bio1a: "I'm ",
      bioName: "Salem",
      bio1b: ", a software engineer based in ",
      bioLoc: "Sharjah, UAE",
      bio1c: ". Four years building fast, polished websites for interior design and fit-out companies. I sweat the small stuff that makes a site feel ",
      made: "made",
      bio1d: ", not ",
      assembled: "assembled",
      bio1e: ".",
      bio2a:
        "Right now I'm helping studios and contractors turn their work into websites that win clients. If that's you, ",
      talk: "let's talk",
      bio2b: ".",
      badges: ["Sharjah, UAE", "4+ yrs shipping", "20+ websites", "solo builder"],
      promptA: "want to write back? press ",
      promptB: " or ",
      clickHere: "click here",
      promptC: " to compose",
      to: "to:",
      from: "from:",
      subject: "subject:",
      message: "message:",
      fromPh: "you@company.com",
      subjectPh: "New website enquiry",
      messagePh: "Tell me about your company…",
      send: "send →",
    },
    pricing: {
      eyebrow: "The awkward part",
      title: "Worth every dirham",
      lede1: "One price.",
      lede2: "No surprises.",
      desc: "We talk, I scope the work, we agree on a number, and I start. Simple and honest.",
      satisfied: "+20 Satisfied Clients",
      planName: "Landing Page",
      planDesc: "Design and build, handled end to end.",
      from: "From",
      amount: "1,999",
      currency: "AED",
      per: "landing page",
      features: [
        "Custom Design",
        "Fully Responsive",
        "SEO Ready",
        "Contact + WhatsApp",
        "2–4 Day Delivery",
        "Handover & Training",
      ],
      addonsTitle: "Optional add-ons",
      addons: [
        { label: "Arabic + English", price: "+150 AED" },
        { label: "CMS / CRM", price: "+100 AED" },
        { label: "Hosting + Domain", price: "100 AED/mo" },
      ],
      cta: "Book a Free Call",
    },
    faq: {
      eyebrow: "Before you ask",
      title: "Questions, answered.",
      asideTitle: "Got a different question?",
      asideText: "Book a quick call and let's talk it through.",
      asideCta: "Book a Free Call",
      mailLabel: "Or just email",
      phoneLabel: "Or on WhatsApp",
      items: [
        {
          q: "How much does a website cost?",
          a: "A landing page starts at 1,999 AED. Add-ons are optional: bilingual Arabic + English is +150 AED, a CMS/CRM to edit content yourself is +100 AED, and hosting + domain is 100 AED/month (billed yearly). Bigger or custom sites are quoted by scope.",
        },
        {
          q: "How long does it take?",
          a: "About 2–4 days for a landing page. Anything larger or more custom depends on the scope — I'll give you a clear timeline before we start.",
        },
        {
          q: "Can you build it in Arabic and English?",
          a: "Yes, as an add-on. A full bilingual build with proper right-to-left Arabic (like this site) is +150 AED on top of the base price.",
        },
        {
          q: "Do you handle hosting and the domain?",
          a: "Yes — as a separate service. Hosting, your domain, and business email are 100 AED/month, billed yearly. Only if you need it; you're free to host it yourself too.",
        },
        {
          q: "Can I update the content myself?",
          a: "Yes. For +100 AED I add a simple CMS/dashboard so you can edit text, add projects, and swap images without touching any code.",
        },
        {
          q: "What kind of businesses do you work with?",
          a: "All kinds — interior and fit-out studios, e-commerce brands, and service companies. If you need a site that looks sharp and actually converts, I can help.",
        },
      ],
    },
    footer: {
      eyebrow: "The last pixel",
      title1: "Let's build",
      title2Pre: "something ",
      title2Accent: "good",
      cta: "Book a Free Call",
      terms: "Terms",
      privacy: "Privacy",
      credit: "Built by",
    },
    wa: { aria: "WhatsApp", label: "Chat on WhatsApp" },
  },

  ar: {
    dir: "rtl",
    langName: "العربية",
    other: "English",
    nav: {
      links: [
        { label: "المشاريع", href: "#work" },
        { label: "لماذا أنا", href: "#why" },
        { label: "نبذة", href: "#about" },
        { label: "الأسعار", href: "#pricing" },
        { label: "الأسئلة", href: "#faq" },
      ],
      cta: "لنتحدث",
      chapters: [
        "متاح للعمل الآن",
        "أعمال أفتخر بها",
        "عرضي الصادق",
        "الإنسان خلف الكود",
        "لنتحدث بالأرقام",
        "التفاصيل الدقيقة",
        "دورك الآن",
      ],
    },
    hero: {
      helloPrefix: "مرحبًا، أنا",
      name: "سالم",
      title1: "أهتمّ بكل بكسل،",
      title2: "واطلق منتجات حقيقية.",
      ctaTitle: "احجز مكالمة مجانية",
      ctaSub: "مكالمة تعريفية 15 دقيقة",
      fontLabel: "الخط",
      langLabel: "اللغة",
    },
    work: {
      eyebrow: "أعمال مختارة",
      title1: "مواقع",
      afterIcon: "",
      title2: "كسبت العميل.",
      view: "عرض المشروع",
      detail: {
        overview: "نبذة",
        services: "ما قمت به",
        highlights: "أبرز النقاط",
        result: "النتيجة",
        role: "الدور",
        year: "السنة",
        visit: "زيارة الموقع المباشر",
        book: "ابدأ مشروعًا مماثلًا",
        back: "العودة للمشاريع",
        notLive: "للأسف، هذا المشروع ليس مباشرًا بعد.",
      },
      projects: [
        {
          name: "مارينا ديكور",
          blurb:
            "موقع أنيق بطابع داكن لاستوديو تشطيبات داخلية في الإمارات — يعرض المشاريع السكنية والتجارية والخامات واللمسات بأبهى صورة.",
          meta: "ويب • تشطيبات داخلية • 2025",
          tags: ["مميّز", "مباشر", "ثنائي اللغة"],
          role: "تصميم وتطوير",
          year: "2025",
          services: ["تصميم UX", "واجهة أمامية", "لوحة تحكم", "سيو"],
          overview:
            "تصمّم مارينا ديكور مساحات سكنية وتجارية مدروسة في الإمارات. بنيت موقعًا بطابع داكن يعتمد على الصور ليروي المشاريع والنجارة واللمسات — سريع وثنائي اللغة وسهل التحديث.",
          highlights: [
            "معارض مشاريع سينمائية تعتمد الصور",
            "ثنائي اللغة وجاهز لليمين لليسار منذ البداية",
            "تعديل المحتوى بنقرة واحدة عبر لوحة بسيطة",
          ],
          result: "تضاعفت الاستفسارات في الشهر الأول.",
        },
        {
          name: "زان",
          blurb:
            "علامة تجارية إلكترونية لمنتجات التسمير — واجهة شاطئية سينمائية، متجر كامل، ولوحة تحكم لإدارة المنتجات والطلبات.",
          meta: "متجر إلكتروني • جمال ونمط حياة • 2025",
          tags: ["مميّز", "متجر إلكتروني", "لوحة تحكم"],
          role: "تصميم وتطوير",
          year: "2025",
          services: ["تصميم UX", "واجهة أمامية", "متجر إلكتروني", "لوحة تحكم"],
          overview:
            "زان علامة تسمير بروح شاطئية. صمّمتها وطوّرتها من الألف إلى الياء — واجهة شاطئية ممتدة، قسم منتجات قابل للتسوق، صفحات منتجات غنية، قسم تعريفي، ولوحة تحكم لإدارة المنتجات والطلبات.",
          highlights: [
            "واجهة شاطئية ممتدة وصور منتجات سينمائية",
            "متجر كامل: كتالوج وصفحات منتجات وسلة",
            "لوحة تحكم لإدارة المنتجات والطلبات",
          ],
          result: "متجر متكامل، أُطلق من الألف إلى الياء.",
        },
        {
          name: "أمولفي ستوديو",
          blurb:
            "موقع أنيق بطابع داكن لاستوديو تصميم داخلي سكني — الحِرفية والهدوء في المقدمة.",
          meta: "ويب • سكني • 2024",
          tags: ["مميّز", "متجاوب", "سريع"],
          role: "تصميم وتطوير",
          year: "2024",
          services: ["تصميم UX", "واجهة أمامية", "موشن", "سيو"],
          overview:
            "يبتكر أمولفي ستوديو تصاميم داخلية سكنية خالدة. بنيت موقعًا واثقًا بطابع داكن، حيث تترك الخطوط الكبيرة والصور الممتدة الحِرفية تتحدث — راقٍ وسريع ومميز.",
          highlights: [
            "صور ممتدة مع خطوط كبيرة",
            "تفاعلات دقيقة وسلسة",
            "محسّن ليحمّل بسرعة على أي جهاز",
          ],
          result: "ارتفعت حجوزات الاستشارات 45%.",
        },
        {
          name: "فيلوم",
          blurb:
            "موقع أعمال تحريري لمكتب عمارة وتصميم داخلي — مجموعة مساحات مدروسة.",
          meta: "ويب • عمارة • 2024",
          tags: ["أعمال", "تحريري", "لوحة تحكم"],
          role: "تصميم وتطوير",
          year: "2024",
          services: ["تصميم UX", "واجهة أمامية", "لوحة تحكم", "سيو"],
          overview:
            "احتاج فيلوم موقعًا بهدوء ودقّة مبانيهم. بنيت شبكة تحريرية خفيفة تمنح كل مشروع مساحته — طباعة نظيفة ومساحات واسعة ومعرض يتوسّع مع نمو أعمالهم.",
          highlights: [
            "شبكة مشاريع تحريرية تعتمد المعرض",
            "طباعة هادئة بمساحات واسعة",
            "تتوسّع بسهولة عند إضافة المشاريع",
          ],
          result: "تضاعفت استفسارات المشاريع.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا أنا؟",
      title1: "تعامل مع المطوّر،",
      title2: "لا مع وكالة.",
      aTitle: "جودة تشعر بها",
      aText: "عمل متقن بحرفية حقيقية. كل تفصيل له مكانه، ويصمد على الأجهزة الفعلية.",
      bTitle: "لا أتوقف عند النسخة الأولى",
      bText: "تحصل على عدة اتجاهات لتختار منها، ثم نطوّر الأفضل معًا.",
      planTitle: "خطة واحدة بسيطة.",
      planText: "بدون باقات معقدة. تسعير واضح.",
      planName: "شريك موقعك",
      planDesc: "تصميم وتطوير، من الألف إلى الياء.",
      join: "ابدأ اليوم",
      proof: "+20 عميل سعيد",
      years: "سنوات خبرة",
      websites: "مواقع منجزة",
      happyTitle: "عملاء سعداء",
      happyText: "عملاء يعودون دائمًا.",
      quote: "«أعاد سالم بناء موقعنا خلال أسبوعين وتضاعفت الاستفسارات. سريع ودقيق وبلا متاعب.»",
      quoteName: "ليلى ح.",
      quoteRole: "مؤسِّسة، مارينا ديكور",
    },
    about: {
      eyebrow: "من أنا",
      title: "الشخص خلف الشاشة",
      stack: "ما أقدّمه",
      skills: [
        { label: "React", color: "#61dafb" },
        { label: "SEO", color: "#10b981" },
        { label: "متجاوب", color: "#3b82f6" },
        { label: "سرعة تحميل", color: "#f59e0b" },
        { label: "ثنائي اللغة", color: "#a855f7" },
      ],
      cmd: "whoami --verbose",
      bio1a: "أنا ",
      bioName: "سالم",
      bio1b: "، مهندس برمجيات مقيم في ",
      bioLoc: "الشارقة، الإمارات",
      bio1c: ". أربع سنوات في بناء مواقع سريعة ومتقنة لشركات التصميم الداخلي والتشطيبات. أهتم بأدق التفاصيل التي تجعل الموقع يبدو ",
      made: "مصنوعًا بعناية",
      bio1d: "، لا ",
      assembled: "مُجمّعًا",
      bio1e: ".",
      bio2a:
        "أساعد الآن الاستوديوهات والمقاولين على تحويل أعمالهم إلى مواقع تكسب العملاء. إن كان هذا حالك، ",
      talk: "لنتحدث",
      bio2b: ".",
      badges: ["الشارقة، الإمارات", "+4 سنوات", "+20 موقع", "مطوّر مستقل"],
      promptA: "تريد الرد؟ اضغط ",
      promptB: " أو ",
      clickHere: "انقر هنا",
      promptC: " للكتابة",
      to: "إلى:",
      from: "من:",
      subject: "الموضوع:",
      message: "الرسالة:",
      fromPh: "you@company.com",
      subjectPh: "استفسار عن موقع جديد",
      messagePh: "أخبرني عن شركتك…",
      send: "إرسال →",
    },
    pricing: {
      eyebrow: "الجزء المُحرج",
      title: "يستحق كل درهم",
      lede1: "سعر واحد.",
      lede2: "بلا مفاجآت.",
      desc: "نتحدث، أحدّد نطاق العمل، نتفق على السعر، وأبدأ. بساطة وصدق.",
      satisfied: "+20 عميل راضٍ",
      planName: "صفحة تعريفية",
      planDesc: "تصميم وتطوير كامل من الألف إلى الياء.",
      from: "يبدأ من",
      amount: "1,999",
      currency: "درهم",
      per: "صفحة تعريفية",
      features: [
        "تصميم مخصص",
        "متجاوب بالكامل",
        "جاهز SEO",
        "تواصل + واتساب",
        "تسليم خلال 2–4 أيام",
        "تسليم وتدريب",
      ],
      addonsTitle: "إضافات اختيارية",
      addons: [
        { label: "عربي + إنجليزي", price: "+150 درهم" },
        { label: "لوحة تحكم / CRM", price: "+100 درهم" },
        { label: "استضافة + نطاق", price: "100 درهم/شهر" },
      ],
      cta: "احجز مكالمة مجانية",
    },
    faq: {
      eyebrow: "قبل أن تسأل",
      title: "أسئلة، وإجابات.",
      asideTitle: "لديك سؤال آخر؟",
      asideText: "احجز مكالمة سريعة ولنتحدث بالتفصيل.",
      asideCta: "احجز مكالمة مجانية",
      mailLabel: "أو راسلني عبر البريد",
      phoneLabel: "أو عبر واتساب",
      items: [
        {
          q: "كم تكلفة الموقع؟",
          a: "تبدأ الصفحة التعريفية من 1,999 درهم. الإضافات اختيارية: النسخة ثنائية اللغة (عربي + إنجليزي) بـ +150 درهم، ولوحة تحكم لتعديل المحتوى بنفسك بـ +100 درهم، والاستضافة مع النطاق بـ 100 درهم شهريًا (تُدفع سنويًا). المواقع الأكبر أو المخصصة تُسعّر حسب النطاق.",
        },
        {
          q: "كم يستغرق الأمر؟",
          a: "نحو 2–4 أيام للصفحة التعريفية. أي شيء أكبر أو أكثر تخصيصًا يعتمد على النطاق — وسأعطيك جدولًا زمنيًا واضحًا قبل أن نبدأ.",
        },
        {
          q: "هل يمكنك بناؤه بالعربية والإنجليزية؟",
          a: "نعم، كإضافة. النسخة الكاملة ثنائية اللغة مع دعم صحيح لليمين لليسار (مثل هذا الموقع) بـ +150 درهم فوق السعر الأساسي.",
        },
        {
          q: "هل تتولى الاستضافة والنطاق؟",
          a: "نعم — كخدمة منفصلة. الاستضافة والنطاق والبريد الرسمي بـ 100 درهم شهريًا، تُدفع سنويًا. فقط إن احتجتها؛ ويمكنك استضافته بنفسك أيضًا.",
        },
        {
          q: "هل يمكنني تحديث المحتوى بنفسي؟",
          a: "نعم. مقابل +100 درهم أضيف لوحة تحكم بسيطة لتعديل النصوص وإضافة المشاريع وتبديل الصور دون لمس الكود.",
        },
        {
          q: "ما نوع الشركات التي تعمل معها؟",
          a: "جميع الأنواع — استوديوهات التصميم والتشطيبات، والعلامات التجارية الإلكترونية، والشركات الخدمية. إن كنت تريد موقعًا أنيقًا يحقق نتائج فعلية، أستطيع المساعدة.",
        },
      ],
    },
    footer: {
      eyebrow: "آخر بكسل",
      title1: "لنبنِ",
      title2Pre: "شيئًا ",
      title2Accent: "مميزًا",
      cta: "احجز مكالمة مجانية",
      terms: "الشروط",
      privacy: "الخصوصية",
      credit: "من تطوير",
    },
    wa: { aria: "واتساب", label: "تواصل عبر واتساب" },
  },
};

const I18nContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "ar") return saved;
    }
    return "en";
  });

  useEffect(() => {
    const dir = DICT[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.toggle("lang-ar", lang === "ar");
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "en" ? "ar" : "en")),
      dir: DICT[lang].dir,
      t: DICT[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
