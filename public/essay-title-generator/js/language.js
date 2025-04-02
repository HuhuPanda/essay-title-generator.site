// 语言配置
const languages = {
  'en': {
    name: 'English',
    code: 'en'
  },
  'zh-CN': {
    name: '简体中文',
    code: 'zh-CN'
  },
  'zh-TW': {
    name: '繁體中文',
    code: 'zh-TW'
  },
  'ja': {
    name: '日本語',
    code: 'ja'
  }
};

// 翻译数据
const translations = {
  // 导航
  'nav_home': {
    'en': 'Home',
    'zh-CN': '首页',
    'zh-TW': '首頁',
    'ja': 'ホーム'
  },
  'nav_about': {
    'en': 'About Us',
    'zh-CN': '关于我们',
    'zh-TW': '關於我們',
    'ja': '私たちについて'
  },
  'nav_faq': {
    'en': 'FAQ',
    'zh-CN': '常见问题',
    'zh-TW': '常見問題',
    'ja': 'よくある質問'
  },
  // 首页
  'hero_title': {
    'en': 'Professional Essay Title Generator',
    'zh-CN': '专业论文标题生成器',
    'zh-TW': '專業論文標題生成器',
    'ja': 'プロフェッショナル論文タイトルジェネレーター'
  },
  'hero_subtitle': {
    'en': 'Generate attractive academic paper titles based on keywords',
    'zh-CN': '根据关键词快速生成吸引人的学术论文标题',
    'zh-TW': '根據關鍵詞快速生成吸引人的學術論文標題',
    'ja': 'キーワードに基づいて魅力的な学術論文のタイトルを生成'
  },
  'generator_title': {
    'en': 'Generate Your Essay Title',
    'zh-CN': '生成您的论文标题',
    'zh-TW': '生成您的論文標題',
    'ja': '論文タイトルを生成する'
  },
  'keywords_label': {
    'en': 'Keywords (separated by commas)',
    'zh-CN': '关键词（用逗号分隔）',
    'zh-TW': '關鍵詞（用逗號分隔）',
    'ja': 'キーワード（カンマ区切り）'
  },
  'keywords_placeholder': {
    'en': 'e.g.: artificial intelligence, education, application',
    'zh-CN': '例如：人工智能,教育,应用',
    'zh-TW': '例如：人工智能,教育,應用',
    'ja': '例：人工知能,教育,応用'
  },
  'discipline_label': {
    'en': 'Academic Field',
    'zh-CN': '学科领域',
    'zh-TW': '學科領域',
    'ja': '学問分野'
  },
  'discipline_placeholder': {
    'en': 'Please select a discipline',
    'zh-CN': '请选择学科',
    'zh-TW': '請選擇學科',
    'ja': '分野を選択してください'
  },
  'title_type_label': {
    'en': 'Title Type',
    'zh-CN': '标题类型',
    'zh-TW': '標題類型',
    'ja': 'タイトルタイプ'
  },
  'type_question': {
    'en': 'Question',
    'zh-CN': '问题型',
    'zh-TW': '問題型',
    'ja': '質問型'
  },
  'type_statement': {
    'en': 'Statement',
    'zh-CN': '陈述型',
    'zh-TW': '陳述型',
    'ja': '陳述型'
  },
  'type_comparison': {
    'en': 'Comparison',
    'zh-CN': '对比型',
    'zh-TW': '對比型',
    'ja': '比較型'
  },
  'count_label': {
    'en': 'Number of Titles',
    'zh-CN': '生成数量',
    'zh-TW': '生成數量',
    'ja': '生成数'
  },
  'generate_button': {
    'en': 'Generate Titles',
    'zh-CN': '生成标题',
    'zh-TW': '生成標題',
    'ja': 'タイトルを生成'
  },
  'results_title': {
    'en': 'Generated Titles',
    'zh-CN': '生成的标题',
    'zh-TW': '生成的標題',
    'ja': '生成されたタイトル'
  },
  'regenerate_button': {
    'en': 'Regenerate',
    'zh-CN': '重新生成',
    'zh-TW': '重新生成',
    'ja': '再生成'
  },
  // 学科
  'computer_science': {
    'en': 'Computer Science',
    'zh-CN': '计算机科学',
    'zh-TW': '計算機科學',
    'ja': 'コンピュータサイエンス'
  },
  'education': {
    'en': 'Education',
    'zh-CN': '教育学',
    'zh-TW': '教育學',
    'ja': '教育学'
  },
  'medicine': {
    'en': 'Medicine',
    'zh-CN': '医学',
    'zh-TW': '醫學',
    'ja': '医学'
  },
  'psychology': {
    'en': 'Psychology',
    'zh-CN': '心理学',
    'zh-TW': '心理學',
    'ja': '心理学'
  },
  'business': {
    'en': 'Business Management',
    'zh-CN': '商业管理',
    'zh-TW': '商業管理',
    'ja': 'ビジネス管理'
  },
  'literature': {
    'en': 'Literature',
    'zh-CN': '文学',
    'zh-TW': '文學',
    'ja': '文学'
  },
  'engineering': {
    'en': 'Engineering',
    'zh-CN': '工程学',
    'zh-TW': '工程學',
    'ja': '工学'
  },
  'social_science': {
    'en': 'Social Science',
    'zh-CN': '社会科学',
    'zh-TW': '社會科學',
    'ja': '社会科学'
  },
  'natural_science': {
    'en': 'Natural Science',
    'zh-CN': '自然科学',
    'zh-TW': '自然科學',
    'ja': '自然科学'
  },
  // 按钮和操作
  'copy_button': {
    'en': 'Copy',
    'zh-CN': '复制',
    'zh-TW': '複製',
    'ja': 'コピー'
  },
  'favorite_button': {
    'en': 'Favorite',
    'zh-CN': '收藏',
    'zh-TW': '收藏',
    'ja': 'お気に入り'
  },
  'edit_button': {
    'en': 'Edit',
    'zh-CN': '编辑',
    'zh-TW': '編輯',
    'ja': '編集'
  },
  // 页脚
  'footer_description': {
    'en': 'Helping students and researchers quickly generate professional essay titles',
    'zh-CN': '帮助学生和研究人员快速生成专业论文标题',
    'zh-TW': '幫助學生和研究人員快速生成專業論文標題',
    'ja': '学生や研究者が専門的な論文タイトルを素早く生成するのを支援'
  },
  'quick_links': {
    'en': 'Quick Links',
    'zh-CN': '快速链接',
    'zh-TW': '快速鏈接',
    'ja': 'クイックリンク'
  },
  'contact_us': {
    'en': 'Contact Us',
    'zh-CN': '联系我们',
    'zh-TW': '聯繫我們',
    'ja': 'お問い合わせ'
  },
  'contact_description': {
    'en': 'If you have any questions or suggestions, please contact us',
    'zh-CN': '有任何问题或建议，请联系我们',
    'zh-TW': '有任何問題或建議，請聯繫我們',
    'ja': 'ご質問やご提案がございましたら、お問い合わせください'
  },
  'copyright': {
    'en': 'Essay Title Generator. All rights reserved.',
    'zh-CN': '论文标题生成器. 保留所有权利.',
    'zh-TW': '論文標題生成器. 保留所有權利.',
    'ja': '論文タイトルジェネレーター. 全著作権所有.'
  },
  'cookies_tech_desc': {
    'en': 'We use cookies to enhance your experience, analyze usage patterns, and provide personalized content.',
    'zh-CN': '我们使用Cookie来增强您的体验，分析使用模式并提供个性化内容。',
    'zh-TW': '我們使用Cookie來增強您的體驗，分析使用模式並提供個性化內容。',
    'ja': '当社はお客様の体験を向上させ、利用パターンを分析し、パーソナライズされたコンテンツを提供するためにCookieを使用します。'
  },
  'how_we_use': {
    'en': 'How We Use Your Information',
    'zh-CN': '我们如何使用您的信息',
    'zh-TW': '我們如何使用您的信息',
    'ja': 'お客様の情報の使用方法'
  },
  'use_purposes': {
    'en': 'We use the information we collect for the following purposes:',
    'zh-CN': '我们将收集的信息用于以下目的：',
    'zh-TW': '我們將收集的信息用於以下目的：',
    'ja': '当社は収集した情報を以下の目的で使用します：'
  },
  'use_purpose_1': {
    'en': 'Provide, operate, and improve our essay title generation service',
    'zh-CN': '提供、运营和改进我们的论文标题生成服务',
    'zh-TW': '提供、運營和改進我們的論文標題生成服務',
    'ja': '論文タイトル生成サービスの提供、運営、改善'
  },
  'use_purpose_2': {
    'en': 'Analyze and understand how users interact with our website',
    'zh-CN': '分析和理解用户如何与我们的网站互动',
    'zh-TW': '分析和理解用戶如何與我們的網站互動',
    'ja': 'ユーザーが当社ウェブサイトとどのように相互作用するかを分析し理解する'
  },
  'use_purpose_3': {
    'en': 'Enhance and personalize your experience',
    'zh-CN': '增强和个性化您的体验',
    'zh-TW': '增強和個性化您的體驗',
    'ja': 'お客様の体験を向上させパーソナライズする'
  },
  'use_purpose_4': {
    'en': 'Develop new features and functionalities',
    'zh-CN': '开发新功能',
    'zh-TW': '開發新功能',
    'ja': '新機能の開発'
  },
  'use_purpose_5': {
    'en': 'Respond to your inquiries and provide customer support',
    'zh-CN': '回应您的询问并提供客户支持',
    'zh-TW': '回應您的詢問並提供客戶支持',
    'ja': 'お問い合わせに応答しカスタマーサポートを提供する'
  },
  'use_purpose_6': {
    'en': 'Monitor and prevent fraudulent activities or unauthorized access',
    'zh-CN': '监控和防止欺诈活动或未授权访问',
    'zh-TW': '監控和防止欺詐活動或未授權訪問',
    'ja': '不正行為や不正アクセスの監視と防止'
  },
  'use_purpose_7': {
    'en': 'Comply with legal obligations',
    'zh-CN': '遵守法律义务',
    'zh-TW': '遵守法律義務',
    'ja': '法的義務の遵守'
  },
  'data_sharing': {
    'en': 'Data Sharing and Disclosure',
    'zh-CN': '数据共享和披露',
    'zh-TW': '數據共享和披露',
    'ja': 'データの共有と開示'
  },
  'sharing_circumstances': {
    'en': 'We may share your information in the following circumstances:',
    'zh-CN': '我们可能在以下情况下共享您的信息：',
    'zh-TW': '我們可能在以下情況下共享您的信息：',
    'ja': '当社は以下の状況でお客様の情報を共有することがあります：'
  },
  'service_providers': {
    'en': 'Service Providers:',
    'zh-CN': '服务提供商：',
    'zh-TW': '服務提供商：',
    'ja': 'サービスプロバイダー：'
  },
  'service_providers_desc': {
    'en': 'We may share information with third-party vendors who perform services on our behalf, such as hosting, analytics, and customer service.',
    'zh-CN': '我们可能与代表我们执行服务的第三方供应商共享信息，例如托管、分析和客户服务。',
    'zh-TW': '我們可能與代表我們執行服務的第三方供應商共享信息，例如託管、分析和客戶服務。',
    'ja': '当社は、ホスティング、分析、カスタマーサービスなど、当社に代わってサービスを実行する第三者ベンダーと情報を共有することがあります。'
  },
  'analytics_partners': {
    'en': 'Analytics Partners:',
    'zh-CN': '分析合作伙伴：',
    'zh-TW': '分析合作夥伴：',
    'ja': '分析パートナー：'
  },
  'analytics_partners_desc': {
    'en': 'We use Google Analytics to understand how users interact with our website. Google Analytics may collect information about your online activities across different websites.',
    'zh-CN': '我们使用Google Analytics了解用户如何与我们的网站互动。Google Analytics可能会收集有关您在不同网站上的在线活动的信息。',
    'zh-TW': '我們使用Google Analytics了解用戶如何與我們的網站互動。Google Analytics可能會收集有關您在不同網站上的在線活動的信息。',
    'ja': '当社はGoogle Analyticsを使用して、ユーザーが当社ウェブサイトとどのように相互作用するかを理解しています。Google Analyticsは、異なるウェブサイト間でのお客様のオンライン活動に関する情報を収集する場合があります。'
  },
  'legal_requirements': {
    'en': 'Legal Requirements:',
    'zh-CN': '法律要求：',
    'zh-TW': '法律要求：',
    'ja': '法的要件：'
  },
  'legal_requirements_desc': {
    'en': 'We may disclose your information if required to do so by law or in response to valid requests by public authorities.',
    'zh-CN': '如果法律要求或响应公共当局的有效请求，我们可能会披露您的信息。',
    'zh-TW': '如果法律要求或響應公共當局的有效請求，我們可能會披露您的信息。',
    'ja': '法律で要求されている場合、または公的機関からの有効な要請に応じて、当社はお客様の情報を開示することがあります。'
  },
  'business_transfers': {
    'en': 'Business Transfers:',
    'zh-CN': '业务转让：',
    'zh-TW': '業務轉讓：',
    'ja': '事業譲渡：'
  },
  'business_transfers_desc': {
    'en': 'If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.',
    'zh-CN': '如果我们参与合并、收购或资产出售，您的信息可能会作为该交易的一部分被转让。',
    'zh-TW': '如果我們參與合併、收購或資產出售，您的信息可能會作為該交易的一部分被轉讓。',
    'ja': '当社が合併、買収、または資産の売却に関与している場合、お客様の情報はその取引の一部として譲渡される可能性があります。'
  },
  'no_sell_info': {
    'en': 'We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
    'zh-CN': '我们不会出于营销目的将您的个人信息出售、出租或交易给第三方。',
    'zh-TW': '我們不會出於營銷目的將您的個人信息出售、出租或交易給第三方。',
    'ja': '当社は、マーケティング目的でお客様の個人情報を第三者に販売、貸与、または取引することはありません。'
  },
  'cookies_tracking': {
    'en': 'Cookies and Tracking Technologies',
    'zh-CN': 'Cookie和跟踪技术',
    'zh-TW': 'Cookie和跟蹤技術',
    'ja': 'CookieとI追跡技術'
  },
  'cookies_desc_1': {
    'en': 'We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small text files stored on your device that help us provide a better user experience.',
    'zh-CN': '我们使用Cookie和类似的跟踪技术来收集有关您的浏览活动的信息。Cookie是存储在您设备上的小型文本文件，可帮助我们提供更好的用户体验。',
    'zh-TW': '我們使用Cookie和類似的跟蹤技術來收集有關您的瀏覽活動的信息。Cookie是存儲在您設備上的小型文本文件，可幫助我們提供更好的用戶體驗。',
    'ja': '当社はお客様のブラウジング活動に関する情報を収集するためにCookieおよび類似の追跡技術を使用しています。Cookieは、より良いユーザーエクスペリエンスを提供するのに役立つ、お客様のデバイスに保存される小さなテキストファイルです。'
  },
  'cookies_types': {
    'en': 'Types of cookies we use:',
    'zh-CN': '我们使用的Cookie类型：',
    'zh-TW': '我們使用的Cookie類型：',
    'ja': '当社が使用するCookieの種類：'
  },
  'essential_cookies': {
    'en': 'Essential Cookies:',
    'zh-CN': '必要的Cookie：',
    'zh-TW': '必要的Cookie：',
    'ja': '必須Cookie：'
  },
  'essential_cookies_desc': {
    'en': 'Necessary for the functioning of our website.',
    'zh-CN': '对我们网站的运行必不可少。',
    'zh-TW': '對我們網站的運行必不可少。',
    'ja': '当社ウェブサイトの機能に必要なもの。'
  },
  'analytical_cookies': {
    'en': 'Analytical/Performance Cookies:',
    'zh-CN': '分析/性能Cookie：',
    'zh-TW': '分析/性能Cookie：',
    'ja': '分析/パフォーマンスCookie：'
  },
  'analytical_cookies_desc': {
    'en': 'Help us understand how visitors interact with our website.',
    'zh-CN': '帮助我们了解访问者如何与我们的网站互动。',
    'zh-TW': '幫助我們了解訪問者如何與我們的網站互動。',
    'ja': '訪問者が当社ウェブサイトとどのように相互作用するかを理解するのに役立ちます。'
  },
  'functionality_cookies': {
    'en': 'Functionality Cookies:',
    'zh-CN': '功能性Cookie：',
    'zh-TW': '功能性Cookie：',
    'ja': '機能Cookie：'
  },
  'functionality_cookies_desc': {
    'en': 'Allow us to remember your preferences and settings.',
    'zh-CN': '允许我们记住您的偏好和设置。',
    'zh-TW': '允許我們記住您的偏好和設置。',
    'ja': 'お客様の設定を記憶することを可能にします。'
  },
  'targeting_cookies': {
    'en': 'Targeting Cookies:',
    'zh-CN': '定向Cookie：',
    'zh-TW': '定向Cookie：',
    'ja': 'ターゲティングCookie：'
  },
  'targeting_cookies_desc': {
    'en': 'Record your visits to our website and the pages you have visited.',
    'zh-CN': '记录您对我们网站的访问和您访问过的页面。',
    'zh-TW': '記錄您對我們網站的訪問和您訪問過的頁面。',
    'ja': 'お客様の当社ウェブサイトへの訪問と訪問したページを記録します。'
  },
  'cookies_control': {
    'en': 'You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some features of our website may not function properly.',
    'zh-CN': '您可以通过浏览器设置控制和管理Cookie。请注意，删除或阻止Cookie可能会影响您的用户体验，并且我们网站的某些功能可能无法正常运行。',
    'zh-TW': '您可以通過瀏覽器設置控制和管理Cookie。請注意，刪除或阻止Cookie可能會影響您的用戶體驗，並且我們網站的某些功能可能無法正常運行。',
    'ja': 'お客様はブラウザの設定を通じてCookieを制御および管理することができます。Cookieを削除またはブロックすると、ユーザーエクスペリエンスに影響を与え、当社ウェブサイトの一部の機能が正常に機能しなくなる可能性があることにご注意ください。'
  },
  'data_security': {
    'en': 'Data Security',
    'zh-CN': '数据安全',
    'zh-TW': '數據安全',
    'ja': 'データセキュリティ'
  },
  'security_measures': {
    'en': 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    'zh-CN': '我们实施适当的安全措施，以保护您的个人信息免受未经授权的访问、更改、披露或销毁。但是，没有任何电子传输或存储方法是100%安全的，我们不能保证绝对的安全性。',
    'zh-TW': '我們實施適當的安全措施，以保護您的個人信息免受未經授權的訪問、更改、披露或銷毀。但是，沒有任何電子傳輸或存儲方法是100%安全的，我們不能保證絕對的安全性。',
    'ja': '当社は、お客様の個人情報を不正アクセス、改ざん、開示、または破壊から保護するために適切なセキュリティ対策を実施しています。ただし、電子的な送信や保存の方法は100%安全ではなく、絶対的なセキュリティを保証することはできません。'
  },
  'your_rights': {
    'en': 'Your Rights and Choices',
    'zh-CN': '您的权利和选择',
    'zh-TW': '您的權利和選擇',
    'ja': 'お客様の権利と選択'
  },
  'rights_location': {
    'en': 'Depending on your location, you may have certain rights regarding your personal information:',
    'zh-CN': '根据您所在的位置，您可能对您的个人信息拥有特定的权利：',
    'zh-TW': '根據您所在的位置，您可能對您的個人信息擁有特定的權利：',
    'ja': 'お客様の所在地によっては、お客様の個人情報に関して特定の権利を有する場合があります：'
  },
  'right_access': {
    'en': 'Access, update, or correct your personal information',
    'zh-CN': '访问、更新或更正您的个人信息',
    'zh-TW': '訪問、更新或更正您的個人信息',
    'ja': '個人情報へのアクセス、更新、または修正'
  },
  'right_deletion': {
    'en': 'Request deletion of your personal information',
    'zh-CN': '请求删除您的个人信息',
    'zh-TW': '請求刪除您的個人信息',
    'ja': '個人情報の削除を要求する'
  },
  'right_object': {
    'en': 'Object to processing of your personal information',
    'zh-CN': '反对处理您的个人信息',
    'zh-TW': '反對處理您的個人信息',
    'ja': '個人情報の処理に対する異議申し立て'
  },
  'right_portability': {
    'en': 'Data portability',
    'zh-CN': '数据可携带性',
    'zh-TW': '數據可攜帶性',
    'ja': 'データポータビリティ'
  },
  'right_consent': {
    'en': 'Withdraw consent',
    'zh-CN': '撤回同意',
    'zh-TW': '撤回同意',
    'ja': '同意の撤回'
  }
};

// 获取当前语言
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en'; // 默认英语
}

// 设置语言
function setLanguage(langCode) {
  if (languages[langCode]) {
    localStorage.setItem('language', langCode);
    translatePage();
    updateLanguageSelector();
  }
}

// 翻译页面
function translatePage() {
  const currentLang = getCurrentLanguage();
  
  // 翻译所有带有data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key] && translations[key][currentLang]) {
      element.textContent = translations[key][currentLang];
    }
  });
  
  // 翻译所有带有data-i18n-placeholder属性的元素
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][currentLang]) {
      element.placeholder = translations[key][currentLang];
    }
  });
  
  // 翻译标题
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (translations[key] && translations[key][currentLang]) {
      element.title = translations[key][currentLang];
    }
  });
  
  // 更新HTML的lang属性
  document.documentElement.lang = currentLang;
}

// 更新语言选择器
function updateLanguageSelector() {
  const currentLang = getCurrentLanguage();
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.value = currentLang;
  }
}

// 初始化语言选择器
function initLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (selector) {
    // 清空现有选项
    selector.innerHTML = '';
    
    // 添加语言选项
    Object.keys(languages).forEach(langCode => {
      const option = document.createElement('option');
      option.value = langCode;
      option.textContent = languages[langCode].name;
      selector.appendChild(option);
    });
    
    // 设置当前语言
    selector.value = getCurrentLanguage();
    
    // 添加事件监听器
    selector.addEventListener('change', function() {
      setLanguage(this.value);
    });
  }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSelector();
  translatePage();
}); 