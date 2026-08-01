import type { Dictionary } from "./en";

export const zhTW = {
  common: {
    skipToContent: "跳至主要內容",
    search: "搜尋",
    searchPlaceholder: "搜尋產品與技術",
    searchEmpty: "試試「ESP32」、「gateway」或「energy」。",
    searchNoResults: "找不到相符的產品。",
    theme: "切換色彩主題",
    language: "語言",
    languageSwitch: "EN / 繁中",
    readMore: "閱讀更多",
    viewAll: "查看全部",
    contactCta: "聯絡我們",
    salesInquiry: "業務諮詢",
    careers: "加入我們",
    downloads: "下載專區",
    privacy: "隱私權",
    terms: "使用條款",
    sitemap: "網站地圖",
    rightsReserved: "版權所有。",
    newsletterTitle: "工程簡報",
    newsletterHint: "不定期分享產品與技術動態，不寄送雜訊。",
    newsletterPlaceholder: "公司電子郵件",
    newsletterAria: "訂閱電子報",
    newsletterSuccess: "已記錄訂閱",
    close: "關閉",
    menu: "選單",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    closeSearch: "關閉搜尋",
    essentialOnly: "僅必要項目",
    acceptAll: "全部接受",
    cookieText:
      "我們使用必要的本機儲存以記住網站偏好設定。選用分析功能僅在您同意後啟用。",
    privacyPolicyLink: "隱私權政策",
    footerTagline:
      "為工業與智慧環境打造嵌入式、連網與電力電子系統。",
    connect: "聯繫",
    mainNav: "主要導覽",
    mobileNav: "行動版導覽",
    siteMenu: "網站選單",
  },

  nav: {
    company: {
      label: "公司",
      items: {
        about: {
          label: "關於 Lyntek",
          description: "我們的工程文化與策略",
        },
        vision: {
          label: "願景與使命",
          description: "我們正在打造的未來",
        },
        quality: {
          label: "品質",
          description: "以設計確保可靠",
        },
        globalPresence: {
          label: "全球布局",
          description: "台灣總部與區域網絡",
        },
        careers: {
          label: "加入我們",
          description: "與我們一起打造有意義的技術",
        },
      },
    },
    solutions: {
      label: "解決方案",
      items: {
        products: {
          label: "產品",
          description: "工業與連網電子產品",
        },
        technologies: {
          label: "技術",
          description: "平台、協定與工程能力",
        },
        industries: {
          label: "產業應用",
          description: "依實際營運需求設計的方案",
        },
        manufacturing: {
          label: "製造",
          description: "從原型到量產",
        },
      },
    },
    resources: {
      label: "資源",
      items: {
        news: {
          label: "新聞與觀點",
          description: "公司與工程觀點",
        },
        downloads: {
          label: "下載專區",
          description: "產品簡介與公司資料",
        },
        partnership: {
          label: "技術合作",
          description: "聚焦的區域製造網絡",
        },
      },
    },
    contact: {
      label: "聯絡我們",
    },
  },

  home: {
    hero: {
      eyebrow: "台北 · 為世界做工程",
      title: "打造智慧電子，迎向",
      titleAccent: "連網的未來。",
      description:
        "Lyntek 專注嵌入式系統、工業物聯網、智慧家庭控制與電力電子，以可靠工程結合清晰的產品思維。",
      ctaPrimary: "探索產品",
      ctaSecondary: "開始專案",
      cardEmbeddedLabel: "01 / EMBEDDED",
      cardEmbeddedText: "硬體 + 韌體",
      cardConnectedLabel: "02 / CONNECTED",
      cardConnectedText: "從邊緣到雲端",
      illustrationAria: "Lyntek 電子模組抽象示意",
    },
    stats: {
      platforms: "產品平台",
      technologies: "核心技術",
      industries: "服務產業",
      regions: "製造區域",
    },
    engineering: {
      eyebrow: "工程平台",
      title: "從訊號到系統。",
      description:
        "我們將電子、韌體、連線與產品生命週期思維整合為一套嚴謹的產品開發方法。",
      cta: "探索技術",
      capabilities: {
        embedded: {
          title: "嵌入式系統",
          description: "依產品條件優化的 MCU 與 Linux 平台。",
        },
        connectivity: {
          title: "連線能力",
          description: "涵蓋無線與有線協定，串接裝置至雲端。",
        },
        edge: {
          title: "邊緣智慧",
          description: "在地推論與資料處理，提升系統即時回應。",
        },
        power: {
          title: "電力電子",
          description: "高效轉換、量測、保護與控制。",
        },
      },
    },
    featured: {
      eyebrow: "精選產品",
      title: "可快速落地為您產品的平台。",
      cta: "查看產品目錄",
    },
    industries: {
      eyebrow: "產業應用",
      title: "依真實運作環境而設計。",
    },
    manufacturing: {
      eyebrow: "製造能力",
      title: "以量產為前提的設計。",
      description:
        "產品架構、PCB 設計、原型、驗證與量產準備由台北統籌，並與合格生產夥伴協作。",
      label: "台北研發",
      stages: "EVT → DVT → PVT",
      stagesCaption: "從工程驗證到量產就緒的階段式路徑。",
      items: {
        pcb: "PCB 與系統設計",
        prototype: "原型開發",
        verification: "設計驗證",
        test: "量產測試策略",
        supplier: "供應商協調",
        lifecycle: "生命週期支援",
      },
      cta: "了解製造方法",
    },
    global: {
      eyebrow: "全球網絡",
      title: "根植台灣，協作全球。",
      cta: "查看全球布局",
      hqTitle: "台北總部",
      hqDescription: "產品策略 · 工程 · 夥伴營運",
    },
    latest: {
      eyebrow: "最新動態",
      title: "觀點、進展與工程實踐。",
      cta: "全部新聞 →",
    },
    faq: {
      eyebrow: "常見問題",
      title: "早期對話需要的清楚答案。",
      items: {
        oem: {
          question: "Lyntek 是否提供 OEM 與 ODM 工程服務？",
          answer:
            "是。合作範圍可涵蓋子系統、產品適配，或硬體、韌體、連線、驗證與量產移轉的完整協同專案。",
        },
        hq: {
          question: "Lyntek Electronics 總部位於何處？",
          answer:
            "Lyntek Electronics Co., Ltd. 總部位於台灣台北，負責產品策略、工程與全球專案方向的統籌。",
        },
        india: {
          question: "Lyntek 是否在印度製造？",
          answer:
            "Lyntek 在印度 Surat、Gujarat 設有策略製造合作，支援選定智慧家庭產品的組裝、測試、OEM 製造與出口作業。",
        },
        specs: {
          question: "網站所列產品規格是否為最終版本？",
          answer:
            "否。網站呈現的是可配置的產品平台。最終規格、認證範圍、價格與供貨條件，將依各專案另行確認。",
        },
      },
    },
    partnership: {
      eyebrow: "技術合作",
      title: "需要從架構到量產的工程夥伴嗎？",
      cta: "討論您的專案",
    },
  },

  about: {
    meta: {
      title: "關於我們",
      description:
        "認識 Lyntek Electronics、我們的工程文化、研發重點、價值觀與全球策略。",
    },
    hero: {
      eyebrow: "關於 Lyntek",
      title: "以產品清晰度為核心的工程公司。",
      description:
        "Lyntek Electronics Co., Ltd. 是一家以台灣為基地的新興科技公司，致力開發適用於工業、能源、智慧建築與連網家庭的可靠電子產品。",
    },
    overview: {
      eyebrow: "公司概況",
      title: "有用的技術，以負責任的方式工程化。",
      paragraphs: {
        p1: "總部位於台北，Lyntek 將產品策略、電子架構、嵌入式軟體、連線與量產準備整合為統一的開發模式。",
        p2: "我們橫跨工業電子、物聯網、電力系統、智慧家庭與 OEM／ODM 專案。合作可從聚焦的子系統到完整產品平台，同樣重視可追蹤性、可維護性與真實運作條件。",
        p3: "全球策略採夥伴導向：工程方向與產品所有權留在台灣，同時建立合格的區域網絡，涵蓋專業技術、製造與市場進入。",
      },
    },
    culture: {
      eyebrow: "工程文化",
      title: "以驗證約束的好奇心。",
      items: {
        evidence: {
          title: "證據先於假設",
          description:
            "我們原型驗證、量測、審查並持續改進。工程決策連結可觀察的產品行為。",
        },
        purpose: {
          title: "有目的的創新",
          description:
            "新技術必須讓產品更可靠、更有效率、更安全或更直覺，才值得進入設計。",
        },
        team: {
          title: "一個產品團隊",
          description:
            "硬體、韌體、工業設計、製造與商務團隊，依共同需求協同作業。",
        },
        collaboration: {
          title: "開放協作",
          description:
            "清楚的介面與透明的專案管理，讓客戶與夥伴能有信心推進。",
        },
      },
    },
    values: {
      eyebrow: "企業價值",
      items: {
        clarity: {
          title: "工程清晰",
          description: "讓限制可見、決策可追蹤、產品可理解。",
        },
        innovation: {
          title: "有用的創新",
          description:
            "技術只有在提升可靠性、效率或使用體驗時才真正重要。",
        },
        trust: {
          title: "長期信任",
          description: "以可維護性、透明協作與負責任成長為設計目標。",
        },
        global: {
          title: "天生國際化",
          description: "台灣工程紀律，搭配可彈性擴展的國際網絡。",
        },
      },
    },
  },

  vision: {
    meta: {
      title: "願景與使命",
      description:
        "Lyntek 對可靠、互通電子產品的願景，以及作為全球工程夥伴的使命。",
    },
    hero: {
      eyebrow: "願景與使命",
      title: "讓智慧電子既可靠、實用，也更貼近人。",
      description:
        "我們看見的未來是：連網產品減少複雜度而非增加負擔，工業級思維也能提升日常科技體驗。",
    },
    cards: {
      vision: {
        title: "我們的願景",
        description: "一個建立在人們可信任電子之上的連網世界。",
      },
      mission: {
        title: "我們的使命",
        description: "將複雜工程轉化為清晰、可擴展的產品平台。",
      },
    },
    commitments: {
      eyebrow: "我們如何推進",
      title: "三項承諾指引每個專案。",
      items: {
        reality: {
          title: "為真實情境設計",
          description:
            "從使用者、運作條件、生命週期限制與製造出發，而非技術清單。",
        },
        change: {
          title: "為演進而建構",
          description:
            "採用模組化架構、可維護軟體與受控介面，讓產品可持續進化。",
        },
        verify: {
          title: "驗證真正重要的事",
          description:
            "將需求連結測試與現場證據，把心力放在產品與商業風險上。",
        },
      },
      cta: "與 Lyntek 一起打造",
    },
  },

  technologies: {
    meta: {
      title: "技術",
      description:
        "探索 Lyntek 在嵌入式 Linux、RTOS、MCU 設計、連線、工業協定、雲端與 OTA 的能力。",
    },
    hero: {
      eyebrow: "技術堆疊",
      title: "橫跨完整連網裝置堆疊的工程能力。",
      description:
        "Lyntek 依完整產品需求，整合晶片、電源、韌體、協定、邊緣軟體與雲端介面。",
    },
    capabilities: {
      embedded: {
        title: "嵌入式系統",
        description: "依產品條件優化的 MCU 與 Linux 平台。",
      },
      connectivity: {
        title: "連線能力",
        description: "涵蓋無線與有線協定，串接裝置至雲端。",
      },
      edge: {
        title: "邊緣智慧",
        description: "在地推論與資料處理，提升系統即時回應。",
      },
      power: {
        title: "電力電子",
        description: "高效轉換、量測、保護與控制。",
      },
      verification: {
        title: "驗證",
        description: "以功能、應力與可靠度為焦點的可追蹤驗證。",
      },
      lifecycle: {
        title: "生命週期工程",
        description: "安全更新、診斷與長期產品演進。",
      },
    },
    architecture: {
      eyebrow: "系統架構",
      title: "一套連貫的工程模型。",
      layers: {
        device: {
          label: "L1",
          title: "裝置",
          description: "MCU 設計、感測、電源、保護、即時控制",
        },
        connectivity: {
          label: "L2",
          title: "連線",
          description: "Wi-Fi、BLE、Matter、Thread、Zigbee、RS485、CAN",
        },
        edge: {
          label: "L3",
          title: "邊緣",
          description: "嵌入式 Linux、協定轉換、本地邏輯、AI 推論",
        },
        cloud: {
          label: "L4",
          title: "雲端",
          description: "MQTT 整合、機隊營運、遙測、安全 OTA",
        },
      },
    },
    core: {
      eyebrow: "核心技術",
    },
  },

  industries: {
    meta: {
      title: "產業應用",
      description:
        "涵蓋工業自動化、能源、電動移動、醫療、智慧建築、智慧家庭、OEM 與基礎設施的電子解決方案。",
    },
    hero: {
      eyebrow: "產業應用",
      title: "技術依所服務的環境而形塑。",
      description:
        "我們從營運情境出發：使用者、介面、電氣條件、連線、部署、維護與生命週期期望。",
    },
    items: {
      industrial: {
        name: "工業自動化",
        description: "確定性控制、邊緣連線與機器智慧。",
      },
      energy: {
        name: "能源",
        description: "量測、轉換與連網能源管理。",
      },
      mobility: {
        name: "電動移動",
        description: "因應移動演進的嵌入式控制與電源子系統。",
      },
      healthcare: {
        name: "醫療健康",
        description: "適用非關鍵連網設備的可靠電子平台。",
      },
      buildings: {
        name: "智慧建築",
        description: "為高效、具回應性空間打造的互通控制。",
      },
      smartHome: {
        name: "智慧家庭",
        description: "圍繞開放生態系打造的優雅控制產品。",
      },
      oem: {
        name: "OEM / ODM",
        description: "從規格到生命週期支援的工程夥伴關係。",
      },
      consumer: {
        name: "消費性電子",
        description: "在可用性、成本與規模之間取得平衡的連網產品。",
      },
      infrastructure: {
        name: "基礎建設",
        description: "網路邊緣的強固通訊與監控。",
      },
    },
    oemCta: {
      eyebrow: "OEM / ODM",
      title: "需要依您市場適配的平台嗎？",
      description:
        "我們可將架構、板級設計、嵌入式軟體、連線、驗證規劃與量產移轉，整合為單一協同專案。",
      cta: "討論需求",
    },
  },

  manufacturing: {
    meta: {
      title: "製造",
      description:
        "Lyntek 由台北主導的研發、PCB 設計、原型、測試、品質規劃與全球製造策略。",
    },
    hero: {
      eyebrow: "製造與營運",
      title: "從原型到量產的工程紀律。",
      description:
        "台北總部統籌產品工程、驗證策略、供應商協作與量產準備，並串接彈性的製造網絡。",
    },
    taipei: {
      eyebrow: "台北總部",
      title: "讓產品意圖成為量產證據的地方。",
      description:
        "台北是 Lyntek 的研發、電子架構、嵌入式開發、PCB 設計、原型、驗證規劃與專案管控中心。製造安排依產品、產量、目標市場與客戶模式選定。",
      stages: {
        architecture: {
          title: "架構",
          description: "需求、系統切分、元件策略與風險規劃。",
        },
        pcb: {
          title: "PCB 設計",
          description: "電路、佈局、電源完整性、介面與可製造性審查。",
        },
        prototype: {
          title: "原型",
          description: "快速工程樣品，驗證關鍵技術與使用假設。",
        },
        verification: {
          title: "驗證",
          description: "規劃功能、環境、應力、互通性與可靠度評估。",
        },
        production: {
          title: "量產準備",
          description: "測試治具、作業指引、供應商管控與試產回饋。",
        },
        lifecycle: {
          title: "生命週期",
          description: "受控變更、韌體維護、診斷與現場學習迴路。",
        },
      },
    },
    india: {
      eyebrow: "製造擴展 – 印度",
      title: "為選定智慧家庭專案擴充區域產能。",
      description:
        "Lyntek Electronics 已與位於印度 Surat、Gujarat 的 Shreesha Tech Global Pvt. Ltd. 建立策略製造合作，支援選定智慧家庭產品的區域生產、OEM 製造、產品組裝、測試與出口作業。",
      clarifier:
        "Lyntek 保留產品方向、工程治理與品牌所有權。此合作擴充區域執行能量，並非母公司、股權或主要品牌關係。",
      items: {
        assembly: "選定產品組裝",
        testing: "量產測試",
        oem: "OEM 製造支援",
        export: "區域出口作業",
      },
    },
    strategy: {
      eyebrow: "全球製造策略",
      title: "對的能力、對的區域、同一套工程標準。",
      description:
        "我們的策略重視合格夥伴、可追蹤需求、量產測試覆蓋、受控變更與透明品質回饋。具體廠區與流程依各專案需求選定並稽核。",
    },
  },

  quality: {
    meta: {
      title: "品質",
      description:
        "Lyntek 的品質哲學、工程流程、產品測試、可靠度與合規方法。",
    },
    hero: {
      eyebrow: "品質",
      title: "品質是工程系統，而非最終檢驗。",
      description:
        "我們將品質內建於需求、架構、元件決策、驗證、量產移轉與生命週期支援。",
    },
    philosophy: {
      eyebrow: "我們的哲學",
      title: "讓風險可見。建立證據。持續改善。",
      description:
        "可靠產品來自許多細小而有紀律的決策。Lyntek 以與階段相符的審查與證據，在量產前降低不確定性，並讓流程與產品風險成比例。",
      practices: {
        traceability: {
          title: "需求可追蹤性",
          description:
            "關鍵產品、介面、安全與可靠度需求，連結至設計決策與驗證證據。",
        },
        testing: {
          title: "風險導向測試",
          description:
            "測試深度依技術與商業風險調整，結合功能、應力、互通性與使用情境評估。",
        },
        production: {
          title: "量產管控",
          description:
            "依選定產品與工廠定義可測試性設計、進料管控、製程檢查點與最終測試。",
        },
        learning: {
          title: "封閉學習迴路",
          description:
            "檢視原型、試產、量產與現場回饋，持續改善產品與工程流程。",
        },
      },
    },
    reliability: {
      eyebrow: "可靠度",
      title: "反映實際使用的測試。",
      description:
        "依專案需要，評估可涵蓋電氣極限、熱行為、電源循環、通訊強健性、軟體復原、耐久、環境暴露與應用特定應力。確切計畫依需求協議訂定。",
    },
    compliance: {
      eyebrow: "合規方法",
      title: "目標市場要求，及早規劃。",
      description:
        "適用的安全、EMC、射頻、環境與市場進入要求，於架構階段識別，並與合格測試夥伴審查。在特定產品與證據完成驗證前，Lyntek 不會主張已取得認證。",
    },
  },

  globalPresence: {
    meta: {
      title: "全球布局",
      description:
        "Lyntek 的台北總部，以及橫跨亞洲、歐洲與印度的區域夥伴網絡。",
    },
    hero: {
      eyebrow: "全球布局",
      title: "聚焦的總部，搭配彈性的國際網絡。",
      description:
        "Lyntek 從台北主導產品與工程方向，並依專案需求與合格區域夥伴協作。",
    },
    map: {
      aria: "顯示 Lyntek 區域網絡的風格化世界地圖",
      noteTitle: "網絡模式",
      noteDescription:
        "區域夥伴說明描述的是商業關係與預期覆蓋範圍，不必然代表 Lyntek 擁有的法人實體或常駐辦公室。",
    },
    network: {
      eyebrow: "據點與網絡",
      title: "貼近技術、生產與市場。",
      locations: {
        taipei: {
          name: "台北，台灣",
          role: "總部",
          description: "產品策略、工程、研發與全球專案方向。",
        },
        japan: {
          name: "日本",
          role: "區域網絡",
          description: "透過專案夥伴進行市場與技術協作。",
        },
        singapore: {
          name: "新加坡",
          role: "區域網絡",
          description: "東南亞商務與生態系關係。",
        },
        malaysia: {
          name: "馬來西亞",
          role: "區域網絡",
          description: "依專案的供應商與市場協作。",
        },
        korea: {
          name: "韓國",
          role: "區域網絡",
          description: "技術與元件生態系關係。",
        },
        europe: {
          name: "歐洲",
          role: "區域網絡",
          description: "依專案的客戶與專業工程協作。",
        },
        surat: {
          name: "Surat，印度",
          role: "製造夥伴",
          description: "選定智慧家庭組裝、測試、OEM 與出口支援。",
        },
      },
    },
  },

  partnership: {
    meta: {
      title: "技術合作",
      description:
        "Lyntek 如何與專業技術及製造夥伴合作，同時保留工程與品牌方向。",
    },
    hero: {
      eyebrow: "技術合作",
      title: "專業夥伴。清楚責任。單一產品方向。",
      description:
        "Lyntek 建立聚焦的合作關係，擴充區域能力，同時維持一致的工程治理與產品所有權。",
    },
    body: {
      title: "沒有品牌歧義的合作。",
      paragraphs: {
        p1: "Lyntek Electronics 定義產品策略、架構、工程標準、品質期望與客戶端品牌方向。",
        p2: "夥伴貢獻明確範圍的能力，例如專業開發、元件生態系、市場進入、組裝、測試或物流。角色與驗收證據於專案層級協議。",
        p3: "在印度，Shreesha Tech Global Pvt. Ltd. 自 Surat、Gujarat 支援選定智慧家庭產品的區域製造。其為製造夥伴——並非 Lyntek 的所有者、母公司或主要品牌。",
      },
    },
    model: {
      eyebrow: "運作模式",
      items: {
        leads: {
          title: "Lyntek 主導",
          description: "產品願景、架構、平台路線圖、工程治理與品牌。",
        },
        specialize: {
          title: "夥伴專精",
          description: "依專案的製造、技術、採購、測試與區域執行。",
        },
        evidence: {
          title: "以證據串接",
          description: "共享需求、審查、組裝資料、驗收測試與受控變更。",
        },
      },
      cta: "探索合作機會",
    },
  },

  downloads: {
    meta: {
      title: "下載專區",
      description: "Lyntek 公司、技術、產品與工程資源。",
    },
    hero: {
      eyebrow: "下載專區",
      title: "產品與公司資源。",
      description:
        "公開文件將於產品配置與市場主張正式核准後發布。目前資料可透過商務團隊取得。",
    },
    requestDocument: "索取文件",
    resources: {
      company: {
        name: "公司概況",
        detail: "企業簡介 · PDF · 依需求準備",
      },
      industrial: {
        name: "工業物聯網產品組合",
        detail: "產品簡介 · PDF · 依需求準備",
      },
      smartHome: {
        name: "智慧家庭產品組合",
        detail: "產品簡介 · PDF · 依需求準備",
      },
      oem: {
        name: "OEM / ODM 能力",
        detail: "工程簡介 · PDF · 依需求準備",
      },
      quality: {
        name: "品質方法",
        detail: "技術概述 · PDF · 依需求準備",
      },
    },
  },

  news: {
    meta: {
      title: "新聞與觀點",
      description:
        "Lyntek Electronics 的公司公告、技術觀點、展覽與工程視角。",
    },
    hero: {
      eyebrow: "新聞與觀點",
      title: "工程觀點與公司進展。",
      description:
        "關於連網產品、工業電子、製造，以及打造國際科技公司的觀點。",
    },
    readArticle: "閱讀文章",
    related: "相關文章",
    backToNews: "返回新聞",
  },

  careers: {
    meta: {
      title: "加入我們",
      description:
        "探索 Lyntek 的工程、嵌入式、韌體、硬體、業務、行銷與實習機會。",
    },
    hero: {
      eyebrow: "加入我們",
      title: "打造能贏得長期信任的電子產品。",
      description:
        "加入一家早期的國際科技公司，以深思熟慮的工程、清楚的所有權與務實創新形塑文化。",
    },
    life: {
      eyebrow: "在 Lyntek 的生活",
      title: "小團隊。有意義的系統。可見的影響力。",
      description:
        "我們重視能在細節與系統視角間切換、說明取捨、從證據學習，並協助同儕成功的人。",
      teams: {
        embedded: "嵌入式軟體",
        firmware: "韌體與連線",
        hardware: "硬體與電力電子",
        product: "產品工程",
        sales: "技術業務",
        marketing: "品牌與行銷",
        internships: "實習",
      },
    },
    open: {
      eyebrow: "開放申請",
      title: "沒有合適職缺？",
      description:
        "請寄送簡潔自我介紹、您擅長解決的問題類型，以及相關作品連結。我們會依專案與團隊發展審閱申請。",
    },
  },

  contact: {
    meta: {
      title: "聯絡我們",
      description:
        "聯絡位於台北的 Lyntek Electronics，洽詢一般、業務、合作與職涯事宜。",
    },
    hero: {
      eyebrow: "聯絡我們",
      title: "一起定義產品該成為什麼。",
      description:
        "請告訴我們應用場景、目標市場、預估產量、時程，以及您需要的工程或生產支援。",
    },
    office: {
      eyebrow: "台北辦公室",
      headquarters: "總部",
      location: "台北，台灣",
      address: "104 台北市中山區中山北路15段62號",
      inquiries: "諮詢窗口",
      general: "一般",
      sales: "業務",
      careers: "職涯",
    },
    form: {
      name: "姓名",
      email: "公司電子郵件",
      company: "公司",
      inquiryType: "諮詢類型",
      message: "我們能如何協助？",
      types: {
        sales: "業務",
        general: "一般",
        career: "職涯",
        media: "媒體",
      },
      consent:
        "我同意 Lyntek 依隱私權政策使用這些資訊以回覆我的諮詢。",
      submit: "送出諮詢",
      successTitle: "諮詢已準備",
      successBody:
        "此示範表單尚未實際傳送資料。上線前請串接核准的 CRM 或郵件服務。",
      sendAnother: "再送一筆",
    },
  },

  products: {
    meta: {
      title: "產品",
      description:
        "探索 Lyntek 工業閘道、控制器、通訊模組、智慧家庭裝置、電源產品與介面。",
    },
    hero: {
      eyebrow: "產品組合",
      title: "工業與連網產品的工程平台。",
      description:
        "我們的組合代表可配置的產品基礎。最終規格、合規與量產配置，將依各客戶與市場專案確立。",
    },
    platformsCount: "個平台",
    features: "功能特點",
    applications: "應用場景",
    specifications: "規格",
    related: "相關產品",
    inquire: "索取資訊",
    backToProducts: "返回產品",
  },

  privacy: {
    meta: {
      title: "隱私權政策",
      description: "Lyntek Electronics 網站的隱私權說明。",
    },
    hero: {
      eyebrow: "法律資訊",
      title: "隱私權政策",
      description: "說明 Lyntek 如何處理透過本企業網站提交的資訊。",
    },
    lastUpdated:
      "最後更新：2026 年 8 月 1 日。本草案應於正式上線前經合格法律顧問審閱。",
    sections: {
      collect: {
        title: "我們蒐集的資訊",
        body: "我們可能蒐集聯絡資料、公司資訊、諮詢內容、求職申請資料，以及營運與保護網站所需的有限技術資訊。",
      },
      use: {
        title: "我們如何使用資訊",
        body: "我們使用提交的資訊回覆諮詢、評估合作機會、處理申請、改善網站效能，並履行法律或安全義務。",
      },
      storage: {
        title: "儲存與分享",
        body: "資訊僅在合理必要期間內保留。我們可能使用經審核的服務供應商處理託管、郵件、分析或客戶管理，並採取適當保護措施。",
      },
      choices: {
        title: "您的選擇",
        body: "在適用情況下，您可要求存取、更正或刪除資料。您也可透過網站同意控制拒絕選用分析功能。",
      },
      contact: {
        title: "聯絡方式",
        body: "隱私權相關問題可寄至 hello@lyntekelectronics.com。",
      },
    },
  },

  terms: {
    meta: {
      title: "使用條款",
      description: "規範使用 Lyntek Electronics 網站的條款。",
    },
    hero: {
      eyebrow: "法律資訊",
      title: "使用條款",
      description: "規範存取與使用本企業網站的條款。",
    },
    lastUpdated:
      "最後更新：2026 年 8 月 1 日。本草案應於正式上線前經合格法律顧問審閱。",
    sections: {
      information: {
        title: "網站資訊",
        body: "內容供一般企業與產品規劃用途。產品說明與規格除非納入已簽署協議，否則不具約束力。",
      },
      ip: {
        title: "智慧財產權",
        body: "網站文案、設計、圖像、產品名稱及其他素材，除非另有說明，均由 Lyntek 擁有或取得授權。",
      },
      use: {
        title: "可接受的使用",
        body: "您不得干擾網站運作、嘗試未授權存取、抓取受限制資訊，或以誤導方式使用內容。",
      },
      external: {
        title: "外部服務",
        body: "連結或嵌入服務可能受第三方條款規範。Lyntek 不對獨立第三方內容或可用性負責。",
      },
      limitation: {
        title: "責任限制",
        body: "在適用法律允許範圍內，Lyntek 不保證不中斷存取，亦不保證初步網站資訊的完整性。",
      },
    },
  },

  notFound: {
    code: "ERROR / 404",
    title: "找不到訊號。",
    description: "所請求的路徑無法使用或已搬移。請返回主系統。",
    cta: "返回首頁",
  },
} satisfies Dictionary;
