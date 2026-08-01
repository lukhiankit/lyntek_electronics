type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export const en = {
  common: {
    skipToContent: "Skip to content",
    search: "Search",
    searchPlaceholder: "Search products and technologies",
    searchEmpty: "Try “ESP32”, “gateway”, or “energy”.",
    searchNoResults: "No matching products.",
    theme: "Toggle color theme",
    language: "Language",
    languageSwitch: "EN / 繁中",
    readMore: "Read more",
    viewAll: "View all",
    contactCta: "Contact",
    salesInquiry: "Sales inquiry",
    careers: "Careers",
    downloads: "Downloads",
    privacy: "Privacy",
    terms: "Terms",
    sitemap: "Sitemap",
    rightsReserved: "All rights reserved.",
    newsletterTitle: "Engineering Brief",
    newsletterHint: "Occasional product and technology updates. No noise.",
    newsletterPlaceholder: "Work email address",
    newsletterAria: "Subscribe to newsletter",
    newsletterSuccess: "Subscription recorded",
    close: "Close",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeSearch: "Close search",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
    cookieText:
      "We use essential storage for site preferences. Optional analytics will only be enabled with your permission.",
    privacyPolicyLink: "Privacy policy",
    footerTagline:
      "Engineering embedded, connected, and power-electronic systems for industrial and intelligent environments.",
    connect: "Connect",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    siteMenu: "Site menu",
  },

  nav: {
    company: {
      label: "Company",
      items: {
        about: {
          label: "About Lyntek",
          description: "Our engineering culture and strategy",
        },
        vision: {
          label: "Vision & Mission",
          description: "The future we are building",
        },
        quality: {
          label: "Quality",
          description: "Reliability by design",
        },
        globalPresence: {
          label: "Global Presence",
          description: "Taiwan headquarters and regional network",
        },
        careers: {
          label: "Careers",
          description: "Build meaningful technology with us",
        },
      },
    },
    solutions: {
      label: "Solutions",
      items: {
        products: {
          label: "Products",
          description: "Industrial and connected electronics",
        },
        technologies: {
          label: "Technologies",
          description: "Platforms, protocols, and engineering",
        },
        industries: {
          label: "Industries",
          description: "Solutions designed around real operations",
        },
        manufacturing: {
          label: "Manufacturing",
          description: "From prototype to production",
        },
      },
    },
    resources: {
      label: "Resources",
      items: {
        news: {
          label: "News & Insights",
          description: "Company and engineering perspectives",
        },
        downloads: {
          label: "Downloads",
          description: "Product briefs and company resources",
        },
        partnership: {
          label: "Technology Partnership",
          description: "A focused regional manufacturing network",
        },
      },
    },
    contact: {
      label: "Contact",
    },
  },

  home: {
    hero: {
      eyebrow: "Taipei · Engineering for the world",
      title: "Engineering intelligent electronics for a",
      titleAccent: "connected future.",
      description:
        "Lyntek develops embedded systems, industrial IoT, smart-home controls, and power electronics where dependable engineering meets elegant product thinking.",
      ctaPrimary: "Explore products",
      ctaSecondary: "Start a project",
      cardEmbeddedLabel: "01 / EMBEDDED",
      cardEmbeddedText: "Hardware + firmware",
      cardConnectedLabel: "02 / CONNECTED",
      cardConnectedText: "Edge to cloud",
      illustrationAria: "Abstract Lyntek electronics module illustration",
    },
    stats: {
      platforms: "Product platforms",
      technologies: "Core technologies",
      industries: "Industries served",
      regions: "Manufacturing regions",
    },
    engineering: {
      eyebrow: "Engineering platform",
      title: "From signal to system.",
      description:
        "We combine electronics, firmware, connectivity, and lifecycle thinking into one disciplined product-development practice.",
      cta: "Explore technologies",
      capabilities: {
        embedded: {
          title: "Embedded systems",
          description:
            "Purpose-built MCU and Linux platforms optimized for product constraints.",
        },
        connectivity: {
          title: "Connectivity",
          description:
            "Wireless and wired protocol integration from device to cloud.",
        },
        edge: {
          title: "Edge intelligence",
          description:
            "Local inference and data processing for responsive systems.",
        },
        power: {
          title: "Power electronics",
          description:
            "Efficient conversion, metering, protection, and control.",
        },
      },
    },
    featured: {
      eyebrow: "Featured products",
      title: "Platforms ready to become your product.",
      cta: "View catalog",
    },
    industries: {
      eyebrow: "Industries",
      title: "Engineered around real operating environments.",
    },
    manufacturing: {
      eyebrow: "Manufacturing capability",
      title: "Designed with production in mind.",
      description:
        "Product architecture, PCB design, prototyping, validation, and manufacturing readiness are coordinated from Taipei, supported by qualified production partners.",
      label: "Taipei R&D",
      stages: "EVT → DVT → PVT",
      stagesCaption:
        "A stage-gated path from engineering validation through production readiness.",
      items: {
        pcb: "PCB and system design",
        prototype: "Prototype development",
        verification: "Design verification",
        test: "Production test strategy",
        supplier: "Supplier coordination",
        lifecycle: "Lifecycle support",
      },
      cta: "Manufacturing approach",
    },
    global: {
      eyebrow: "Global network",
      title: "Rooted in Taiwan. Built to collaborate globally.",
      cta: "View global presence",
      hqTitle: "Taipei headquarters",
      hqDescription: "Product strategy · Engineering · Partner operations",
    },
    latest: {
      eyebrow: "Latest",
      title: "Ideas, progress, and engineering.",
      cta: "All news →",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Clear answers for early conversations.",
      items: {
        oem: {
          question: "Does Lyntek provide OEM and ODM engineering?",
          answer:
            "Yes. Engagements can cover a subsystem, product adaptation, or a coordinated hardware, firmware, connectivity, validation, and production-transfer program.",
        },
        hq: {
          question: "Where is Lyntek Electronics headquartered?",
          answer:
            "Lyntek Electronics Co., Ltd. is headquartered in Taipei, Taiwan, where product strategy, engineering, and global program direction are coordinated.",
        },
        india: {
          question: "Does Lyntek manufacture in India?",
          answer:
            "Lyntek has a strategic manufacturing partnership in Surat, Gujarat for selected smart-home assembly, testing, OEM manufacturing, and export support.",
        },
        specs: {
          question: "Are the listed product specifications final?",
          answer:
            "No. The website presents configurable product platforms. Final specifications, certification scope, pricing, and availability are established for each program.",
        },
      },
    },
    partnership: {
      eyebrow: "Technology partnership",
      title: "Need an engineering partner from architecture to production?",
      cta: "Discuss your program",
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "Learn about Lyntek Electronics, our engineering culture, research focus, values, and global strategy.",
    },
    hero: {
      eyebrow: "About Lyntek",
      title: "An engineering company built around product clarity.",
      description:
        "Lyntek Electronics Co., Ltd. is an emerging Taiwan-based technology company developing dependable electronics for industrial, energy, smart-building, and connected-home applications.",
    },
    overview: {
      eyebrow: "Company overview",
      title: "Useful technology, engineered responsibly.",
      paragraphs: {
        p1: "Headquartered in Taipei, Lyntek brings product strategy, electronics architecture, embedded software, connectivity, and production readiness into a unified development model.",
        p2: "We work across industrial electronics, IoT, power systems, smart home, and OEM/ODM programs. Our role can range from a focused subsystem to a complete product platform, with the same emphasis on traceability, maintainability, and real operating conditions.",
        p3: "Our global strategy is deliberately partner-led: retain engineering direction and product ownership in Taiwan while building a qualified regional network for specialist technology, manufacturing, and market access.",
      },
    },
    culture: {
      eyebrow: "Engineering culture",
      title: "Curiosity, disciplined by verification.",
      items: {
        evidence: {
          title: "Evidence before assumption",
          description:
            "We prototype, measure, review, and improve. Engineering decisions are tied to observable product behavior.",
        },
        purpose: {
          title: "Innovation with purpose",
          description:
            "New technology earns its place by making a product more dependable, efficient, secure, or intuitive.",
        },
        team: {
          title: "One product team",
          description:
            "Hardware, firmware, industrial design, manufacturing, and commercial teams work from shared requirements.",
        },
        collaboration: {
          title: "Open collaboration",
          description:
            "Clear interfaces and transparent program management help customers and partners move with confidence.",
        },
      },
    },
    values: {
      eyebrow: "Corporate values",
      items: {
        clarity: {
          title: "Engineering clarity",
          description:
            "We make constraints visible, decisions traceable, and products understandable.",
        },
        innovation: {
          title: "Useful innovation",
          description:
            "Technology matters when it improves reliability, efficiency, or the user experience.",
        },
        trust: {
          title: "Long-term trust",
          description:
            "We design for maintainability, transparent collaboration, and responsible growth.",
        },
        global: {
          title: "Global by design",
          description:
            "Taiwanese engineering discipline paired with an adaptable international network.",
        },
      },
    },
  },

  vision: {
    meta: {
      title: "Vision & Mission",
      description:
        "Lyntek's vision for dependable, interoperable electronics and our mission as a global engineering partner.",
    },
    hero: {
      eyebrow: "Vision & mission",
      title: "Make intelligent electronics feel dependable, useful, and human.",
      description:
        "We see a future where connected products reduce complexity rather than add to it—and where industrial-grade thinking improves everyday technology.",
    },
    cards: {
      vision: {
        title: "Our vision",
        description: "A connected world built on electronics people can trust.",
      },
      mission: {
        title: "Our mission",
        description:
          "Turn complex engineering into clear, scalable product platforms.",
      },
    },
    commitments: {
      eyebrow: "How we move",
      title: "Three commitments guide every program.",
      items: {
        reality: {
          title: "Design for reality",
          description:
            "Start with users, operating conditions, lifecycle constraints, and manufacturing—not a technology shopping list.",
        },
        change: {
          title: "Build for change",
          description:
            "Use modular architectures, maintainable software, and controlled interfaces so products can evolve.",
        },
        verify: {
          title: "Verify what matters",
          description:
            "Connect requirements to tests and field evidence, focusing effort on product and business risk.",
        },
      },
      cta: "Build with Lyntek",
    },
  },

  technologies: {
    meta: {
      title: "Technologies",
      description:
        "Explore Lyntek capabilities across embedded Linux, RTOS, MCU design, connectivity, industrial protocols, cloud, and OTA.",
    },
    hero: {
      eyebrow: "Technology stack",
      title: "Engineering across the full connected-device stack.",
      description:
        "Lyntek aligns silicon, power, firmware, protocols, edge software, and cloud interfaces around the needs of the complete product.",
    },
    capabilities: {
      embedded: {
        title: "Embedded systems",
        description:
          "Purpose-built MCU and Linux platforms optimized for product constraints.",
      },
      connectivity: {
        title: "Connectivity",
        description:
          "Wireless and wired protocol integration from device to cloud.",
      },
      edge: {
        title: "Edge intelligence",
        description:
          "Local inference and data processing for responsive systems.",
      },
      power: {
        title: "Power electronics",
        description: "Efficient conversion, metering, protection, and control.",
      },
      verification: {
        title: "Verification",
        description:
          "Traceable validation focused on function, stress, and reliability.",
      },
      lifecycle: {
        title: "Lifecycle engineering",
        description:
          "Secure updates, diagnostics, and long-term product evolution.",
      },
    },
    architecture: {
      eyebrow: "System architecture",
      title: "One continuous engineering model.",
      layers: {
        device: {
          label: "L1",
          title: "Device",
          description:
            "MCU design, sensing, power, protection, real-time control",
        },
        connectivity: {
          label: "L2",
          title: "Connectivity",
          description: "Wi-Fi, BLE, Matter, Thread, Zigbee, RS485, CAN",
        },
        edge: {
          label: "L3",
          title: "Edge",
          description:
            "Embedded Linux, protocol translation, local logic, AI inference",
        },
        cloud: {
          label: "L4",
          title: "Cloud",
          description:
            "MQTT integration, fleet operations, telemetry, secure OTA",
        },
      },
    },
    core: {
      eyebrow: "Core technologies",
    },
  },

  industries: {
    meta: {
      title: "Industries",
      description:
        "Electronics solutions for industrial automation, energy, EV, healthcare, smart buildings, smart home, OEM, and infrastructure.",
    },
    hero: {
      eyebrow: "Industries",
      title: "Technology shaped by the environment it serves.",
      description:
        "We start with operational context: users, interfaces, electrical conditions, connectivity, deployment, maintenance, and lifecycle expectations.",
    },
    items: {
      industrial: {
        name: "Industrial Automation",
        description:
          "Deterministic control, edge connectivity, and machine intelligence.",
      },
      energy: {
        name: "Energy",
        description:
          "Measurement, conversion, and connected energy management.",
      },
      mobility: {
        name: "Electric Mobility",
        description:
          "Embedded controls and power subsystems for evolving mobility.",
      },
      healthcare: {
        name: "Healthcare",
        description:
          "Reliable electronics platforms for non-critical connected equipment.",
      },
      buildings: {
        name: "Smart Buildings",
        description:
          "Interoperable controls for efficient, responsive spaces.",
      },
      smartHome: {
        name: "Smart Home",
        description: "Elegant control products built around open ecosystems.",
      },
      oem: {
        name: "OEM / ODM",
        description:
          "Engineering partnerships from specification to lifecycle support.",
      },
      consumer: {
        name: "Consumer Electronics",
        description:
          "Connected products balancing usability, cost, and scale.",
      },
      infrastructure: {
        name: "Infrastructure",
        description:
          "Rugged communication and monitoring at the network edge.",
      },
    },
    oemCta: {
      eyebrow: "OEM / ODM",
      title: "Need a platform adapted to your market?",
      description:
        "We can support architecture, board design, embedded software, connectivity, validation planning, and production transfer as one coordinated program.",
      cta: "Discuss requirements",
    },
  },

  manufacturing: {
    meta: {
      title: "Manufacturing",
      description:
        "Lyntek's Taipei-led R&D, PCB design, prototyping, testing, quality planning, and global manufacturing strategy.",
    },
    hero: {
      eyebrow: "Manufacturing & operations",
      title: "Engineering discipline from prototype to production.",
      description:
        "Our Taipei headquarters coordinates product engineering, verification strategy, supplier collaboration, and production readiness across a flexible manufacturing network.",
    },
    taipei: {
      eyebrow: "Taipei headquarters",
      title: "Where product intent becomes production evidence.",
      description:
        "Taipei is Lyntek's center for R&D, electronics architecture, embedded development, PCB design, prototypes, validation planning, and program control. Manufacturing arrangements are selected to fit the product, volume, target market, and customer model.",
      stages: {
        architecture: {
          title: "Architecture",
          description:
            "Requirements, system partitioning, component strategy, and risk planning.",
        },
        pcb: {
          title: "PCB design",
          description:
            "Schematic, layout, power integrity, interfaces, and design-for-manufacture review.",
        },
        prototype: {
          title: "Prototype",
          description:
            "Rapid engineering builds to validate critical technical and user assumptions.",
        },
        verification: {
          title: "Verification",
          description:
            "Planned functional, environmental, stress, interoperability, and reliability evaluation.",
        },
        production: {
          title: "Production readiness",
          description:
            "Test fixtures, work instructions, supplier controls, and pilot-build feedback.",
        },
        lifecycle: {
          title: "Lifecycle",
          description:
            "Controlled changes, firmware maintenance, diagnostics, and field-learning loops.",
        },
      },
    },
    india: {
      eyebrow: "Manufacturing Expansion – India",
      title: "Regional capacity for selected smart-home programs.",
      description:
        "Lyntek Electronics has established a strategic manufacturing partnership with Shreesha Tech Global Pvt. Ltd. in Surat, Gujarat, India, to support regional production of selected smart home products, OEM manufacturing, product assembly, testing, and export operations.",
      clarifier:
        "Lyntek retains product direction, engineering governance, and brand ownership. The partnership expands regional execution capacity and does not represent a parent, ownership, or primary-brand relationship.",
      items: {
        assembly: "Selected product assembly",
        testing: "Production testing",
        oem: "OEM manufacturing support",
        export: "Regional export operations",
      },
    },
    strategy: {
      eyebrow: "Global manufacturing strategy",
      title: "Right capability, right region, one engineering standard.",
      description:
        "Our strategy favors qualified partners, traceable requirements, production test coverage, controlled changes, and transparent quality feedback. Specific facilities and processes are selected and audited according to each program's needs.",
    },
  },

  quality: {
    meta: {
      title: "Quality",
      description:
        "Lyntek's quality philosophy, engineering process, product testing, reliability, and compliance approach.",
    },
    hero: {
      eyebrow: "Quality",
      title: "Quality is an engineering system, not a final inspection.",
      description:
        "We build quality into requirements, architecture, component decisions, verification, manufacturing transfer, and lifecycle support.",
    },
    philosophy: {
      eyebrow: "Our philosophy",
      title: "Make risk visible. Create evidence. Improve continuously.",
      description:
        "A dependable product comes from many small, disciplined decisions. Lyntek uses stage-appropriate reviews and evidence to reduce uncertainty before volume production, while keeping the process proportional to product risk.",
      practices: {
        traceability: {
          title: "Requirements traceability",
          description:
            "Critical product, interface, safety, and reliability needs are connected to design decisions and verification evidence.",
        },
        testing: {
          title: "Risk-based testing",
          description:
            "Test depth follows technical and business risk, combining functional, stress, interoperability, and use-case evaluation.",
        },
        production: {
          title: "Production controls",
          description:
            "Design-for-test, incoming controls, process checkpoints, and final test are defined for the selected product and factory.",
        },
        learning: {
          title: "Closed learning loop",
          description:
            "Prototype, pilot, production, and field feedback are reviewed to improve the product and the engineering process.",
        },
      },
    },
    reliability: {
      eyebrow: "Reliability",
      title: "Testing that reflects actual use.",
      description:
        "Depending on the program, evaluation may include electrical limits, thermal behavior, power cycling, communication robustness, software recovery, endurance, environmental exposure, and application-specific stress. Exact plans are agreed against requirements.",
    },
    compliance: {
      eyebrow: "Compliance approach",
      title: "Target-market requirements, planned early.",
      description:
        "Applicable safety, EMC, radio, environmental, and market-access requirements are identified during architecture and reviewed with qualified test partners. Lyntek does not claim a certification until the specific product and evidence are verified.",
    },
  },

  globalPresence: {
    meta: {
      title: "Global Presence",
      description:
        "Lyntek's Taipei headquarters and regional partner network across Asia, Europe, and India.",
    },
    hero: {
      eyebrow: "Global presence",
      title: "A focused headquarters with a flexible international network.",
      description:
        "Lyntek leads product and engineering direction from Taipei and collaborates with qualified regional partners according to program needs.",
    },
    map: {
      aria: "Stylized world map showing Lyntek regional network",
      noteTitle: "Network model",
      noteDescription:
        "Regional partner references describe business relationships and intended coverage, not necessarily Lyntek-owned legal entities or staffed offices.",
    },
    network: {
      eyebrow: "Locations & network",
      title: "Close to technology, production, and markets.",
      locations: {
        taipei: {
          name: "Taipei, Taiwan",
          role: "Headquarters",
          description:
            "Product strategy, engineering, R&D, and global program direction.",
        },
        japan: {
          name: "Japan",
          role: "Regional network",
          description:
            "Market and technology collaboration through program-specific partners.",
        },
        singapore: {
          name: "Singapore",
          role: "Regional network",
          description: "Southeast Asia business and ecosystem relationships.",
        },
        malaysia: {
          name: "Malaysia",
          role: "Regional network",
          description: "Program-specific supplier and market collaboration.",
        },
        korea: {
          name: "South Korea",
          role: "Regional network",
          description: "Technology and component ecosystem relationships.",
        },
        europe: {
          name: "Europe",
          role: "Regional network",
          description:
            "Customer and specialist engineering collaboration by program.",
        },
        surat: {
          name: "Surat, India",
          role: "Manufacturing partner",
          description:
            "Selected smart-home assembly, testing, OEM, and export support.",
        },
      },
    },
  },

  partnership: {
    meta: {
      title: "Technology Partnership",
      description:
        "How Lyntek collaborates with specialist technology and manufacturing partners while retaining engineering and brand direction.",
    },
    hero: {
      eyebrow: "Technology partnership",
      title: "Specialist partners. Clear accountability. One product direction.",
      description:
        "Lyntek builds focused relationships that extend regional capability while preserving coherent engineering governance and product ownership.",
    },
    body: {
      title: "Partnership without brand ambiguity.",
      paragraphs: {
        p1: "Lyntek Electronics defines product strategy, architecture, engineering standards, quality expectations, and customer-facing brand direction.",
        p2: "Partners contribute clearly scoped capabilities such as specialized development, component ecosystems, market access, assembly, testing, or logistics. Roles and acceptance evidence are agreed at the program level.",
        p3: "In India, Shreesha Tech Global Pvt. Ltd. supports regional manufacturing of selected smart-home products from Surat, Gujarat. It is a manufacturing partner—not Lyntek's owner, parent, or primary brand.",
      },
    },
    model: {
      eyebrow: "Operating model",
      items: {
        leads: {
          title: "Lyntek leads",
          description:
            "Product vision, architecture, platform roadmap, engineering governance, and brand.",
        },
        specialize: {
          title: "Partners specialize",
          description:
            "Program-specific manufacturing, technology, sourcing, testing, and regional execution.",
        },
        evidence: {
          title: "Evidence connects",
          description:
            "Shared requirements, reviews, build data, acceptance tests, and controlled change.",
        },
      },
      cta: "Explore a partnership",
    },
  },

  downloads: {
    meta: {
      title: "Downloads",
      description: "Lyntek company, technology, product, and engineering resources.",
    },
    hero: {
      eyebrow: "Downloads",
      title: "Product and company resources.",
      description:
        "Public documents will be released as product configurations and market claims are formally approved. Current materials are available through our commercial team.",
    },
    requestDocument: "Request document",
    resources: {
      company: {
        name: "Company overview",
        detail: "Corporate profile · PDF · Prepared on request",
      },
      industrial: {
        name: "Industrial IoT portfolio",
        detail: "Product brief · PDF · Prepared on request",
      },
      smartHome: {
        name: "Smart home portfolio",
        detail: "Product brief · PDF · Prepared on request",
      },
      oem: {
        name: "OEM / ODM capabilities",
        detail: "Engineering brief · PDF · Prepared on request",
      },
      quality: {
        name: "Quality approach",
        detail: "Technical overview · PDF · Prepared on request",
      },
    },
  },

  news: {
    meta: {
      title: "News & Insights",
      description:
        "Corporate announcements, technology insights, exhibitions, and engineering perspectives from Lyntek Electronics.",
    },
    hero: {
      eyebrow: "News & insights",
      title: "Engineering ideas and company progress.",
      description:
        "Perspectives on connected products, industrial electronics, production, and the work of building an international technology company.",
    },
    readArticle: "Read article",
    related: "Related articles",
    backToNews: "Back to news",
  },

  careers: {
    meta: {
      title: "Careers",
      description:
        "Explore engineering, embedded, firmware, hardware, sales, marketing, and internship opportunities at Lyntek.",
    },
    hero: {
      eyebrow: "Careers",
      title: "Build electronics that earn long-term trust.",
      description:
        "Join an early international technology company where thoughtful engineering, clear ownership, and practical innovation shape the culture.",
    },
    life: {
      eyebrow: "Life at Lyntek",
      title: "Small teams. Meaningful systems. Visible impact.",
      description:
        "We value people who can move between detail and system context, explain trade-offs, learn from evidence, and help teammates succeed.",
      teams: {
        embedded: "Embedded software",
        firmware: "Firmware & connectivity",
        hardware: "Hardware & power electronics",
        product: "Product engineering",
        sales: "Technical sales",
        marketing: "Brand & marketing",
        internships: "Internships",
      },
    },
    open: {
      eyebrow: "Open applications",
      title: "No suitable role listed?",
      description:
        "Send a concise introduction, the kind of problems you solve well, and links to relevant work. We review applications as programs and teams develop.",
    },
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Contact Lyntek Electronics in Taipei for general, sales, partnership, and career inquiries.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let’s define what the product needs to become.",
      description:
        "Tell us about the application, target market, expected volume, timeline, and the engineering or production support you need.",
    },
    office: {
      eyebrow: "Taipei office",
      headquarters: "Headquarters",
      location: "Taipei, Taiwan",
      addressPending: "Street address to be published after launch approval.",
      inquiries: "Inquiries",
      general: "General",
      sales: "Sales",
      careers: "Careers",
    },
    form: {
      name: "Name",
      email: "Work email",
      company: "Company",
      inquiryType: "Inquiry type",
      message: "How can we help?",
      types: {
        sales: "Sales",
        general: "General",
        career: "Career",
        media: "Media",
      },
      consent:
        "I consent to Lyntek using this information to respond to my inquiry in accordance with the privacy policy.",
      submit: "Send inquiry",
      successTitle: "Inquiry prepared",
      successBody:
        "This demonstration form does not transmit data yet. Connect it to your approved CRM or email service before launch.",
      sendAnother: "Send another",
    },
  },

  products: {
    meta: {
      title: "Products",
      description:
        "Explore Lyntek industrial gateways, controllers, communication modules, smart-home devices, power products, and interfaces.",
    },
    hero: {
      eyebrow: "Product portfolio",
      title: "Engineering platforms for industrial and connected products.",
      description:
        "Our portfolio represents configurable product foundations. Final specifications, compliance, and production configuration are established for each customer and market program.",
    },
    platformsCount: "platforms",
    features: "Features",
    applications: "Applications",
    specifications: "Specifications",
    related: "Related products",
    inquire: "Request information",
    backToProducts: "Back to products",
  },

  privacy: {
    meta: {
      title: "Privacy Policy",
      description: "Privacy information for the Lyntek Electronics website.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Privacy policy",
      description:
        "How Lyntek handles information submitted through this corporate website.",
    },
    lastUpdated:
      "Last updated: August 1, 2026. This draft should be reviewed by qualified legal counsel before production launch.",
    sections: {
      collect: {
        title: "Information we collect",
        body: "We may collect contact details, company information, inquiry content, job-application materials, and limited technical information needed to operate and secure the website.",
      },
      use: {
        title: "How we use information",
        body: "We use submitted information to answer inquiries, evaluate opportunities, process applications, improve website performance, and meet legal or security obligations.",
      },
      storage: {
        title: "Storage and sharing",
        body: "Information is retained only as reasonably needed for its purpose. We may use vetted service providers for hosting, email, analytics, or customer management, subject to appropriate safeguards.",
      },
      choices: {
        title: "Your choices",
        body: "You may request access, correction, or deletion where applicable. You may also reject optional analytics through the website consent controls.",
      },
      contact: {
        title: "Contact",
        body: "Privacy questions may be sent to hello@lyntekelectronics.com.",
      },
    },
  },

  terms: {
    meta: {
      title: "Terms of Use",
      description: "Terms governing use of the Lyntek Electronics website.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Terms of use",
      description: "Terms governing access to and use of this corporate website.",
    },
    lastUpdated:
      "Last updated: August 1, 2026. This draft should be reviewed by qualified legal counsel before production launch.",
    sections: {
      information: {
        title: "Website information",
        body: "Content is provided for general corporate and product-planning purposes. Product descriptions and specifications are non-binding unless included in a signed agreement.",
      },
      ip: {
        title: "Intellectual property",
        body: "Website copy, design, graphics, product names, and other materials are owned by or licensed to Lyntek unless stated otherwise.",
      },
      use: {
        title: "Acceptable use",
        body: "You may not interfere with website operation, attempt unauthorized access, scrape restricted information, or use content in a misleading way.",
      },
      external: {
        title: "External services",
        body: "Links or embedded services may be governed by third-party terms. Lyntek is not responsible for independent third-party content or availability.",
      },
      limitation: {
        title: "Limitation",
        body: "To the extent permitted by applicable law, Lyntek does not guarantee uninterrupted access or the completeness of preliminary website information.",
      },
    },
  },

  notFound: {
    code: "ERROR / 404",
    title: "Signal not found.",
    description:
      "The requested route is unavailable or has moved. Return to the main system.",
    cta: "Return home",
  },
} as const;

export type Dictionary = DeepStringify<typeof en>;
