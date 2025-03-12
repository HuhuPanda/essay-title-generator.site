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