// 标题生成函数
function generateTitles() {
    // 获取用户输入
    const keywords = document.getElementById('keywords').value.split(',').map(k => k.trim()).filter(k => k);
    const discipline = document.getElementById('discipline').value;
    const titleTypes = Array.from(document.querySelectorAll('input[name="title-type"]:checked')).map(cb => cb.value);
    const count = parseInt(document.getElementById('count').value) || 3;
    
    // 验证输入
    if (keywords.length === 0) {
        alert('请输入至少一个关键词');
        return;
    }
    
    if (!discipline) {
        alert('请选择学科领域');
        return;
    }
    
    if (titleTypes.length === 0) {
        alert('请选择至少一种标题类型');
        return;
    }
    
    // 显示结果区域
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'block';
    
    // 滚动到结果区域
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // 生成标题
    const titles = generateTitlesByType(keywords, discipline, titleTypes, count);
    
    // 显示生成的标题
    displayTitles(titles);
}

// 根据类型生成标题
function generateTitlesByType(keywords, discipline, titleTypes, count) {
    const titles = [];
    const disciplineMap = {
        'computer-science': '计算机科学',
        'education': '教育学',
        'medicine': '医学',
        'psychology': '心理学',
        'business': '商业管理',
        'literature': '文学',
        'engineering': '工程学',
        'social-science': '社会科学',
        'natural-science': '自然科学'
    };
    
    const disciplineName = disciplineMap[discipline] || discipline;
    
    // 标题模板
    const templates = {
        'question': [
            '如何利用{keyword1}改进{keyword2}？{discipline}研究视角',
            '{keyword1}对{keyword2}有何影响？基于{discipline}的分析',
            '{keyword1}与{keyword2}的关系研究：{discipline}领域的新探索',
            '为什么{keyword1}对{keyword2}至关重要？{discipline}的证据',
            '{discipline}视角下，{keyword1}如何重塑{keyword2}？',
            '{keyword1}能否解决{keyword2}问题？{discipline}的实证研究'
        ],
        'statement': [
            '{keyword1}与{keyword2}的融合：{discipline}领域的创新应用',
            '{discipline}中{keyword1}对{keyword2}的影响研究',
            '基于{keyword1}的{keyword2}优化策略：{discipline}实践',
            '{discipline}背景下{keyword1}驱动的{keyword2}发展趋势',
            '{keyword1}赋能{keyword2}：{discipline}的理论与实践',
            '{discipline}领域{keyword1}与{keyword2}协同效应分析'
        ],
        'comparison': [
            '{keyword1}与{keyword2}的对比研究：{discipline}的新视角',
            '传统{keyword1}与现代{keyword2}的比较：{discipline}案例分析',
            '{discipline}中{keyword1}和{keyword2}的优劣势评估',
            '{keyword1}VS{keyword2}：{discipline}领域的效果比较',
            '从{keyword1}到{keyword2}的演变：{discipline}的历史考察',
            '{discipline}视角下{keyword1}与{keyword2}的互补性研究'
        ]
    };
    
    // 生成指定数量的标题
    while (titles.length < count) {
        // 随机选择一个标题类型
        const randomTypeIndex = Math.floor(Math.random() * titleTypes.length);
        const type = titleTypes[randomTypeIndex];
        
        // 随机选择一个模板
        const typeTemplates = templates[type];
        const randomTemplateIndex = Math.floor(Math.random() * typeTemplates.length);
        let template = typeTemplates[randomTemplateIndex];
        
        // 随机打乱关键词顺序
        const shuffledKeywords = [...keywords].sort(() => 0.5 - Math.random());
        
        // 替换模板中的占位符
        let title = template.replace('{discipline}', disciplineName);
        
        // 替换关键词
        for (let i = 0; i < Math.min(shuffledKeywords.length, 3); i++) {
            title = title.replace(`{keyword${i+1}}`, shuffledKeywords[i]);
        }
        
        // 如果模板中有未替换的关键词占位符，使用第一个关键词替换
        for (let i = shuffledKeywords.length; i < 3; i++) {
            title = title.replace(`{keyword${i+1}}`, shuffledKeywords[0]);
        }
        
        // 确保没有重复的标题
        if (!titles.includes(title)) {
            titles.push(title);
        }
    }
    
    return titles;
}

// 显示生成的标题
function displayTitles(titles) {
    const titlesContainer = document.getElementById('titles-container');
    titlesContainer.innerHTML = '';
    
    titles.forEach((title, index) => {
        const titleCard = document.createElement('div');
        titleCard.className = 'title-card';
        
        titleCard.innerHTML = `
            <h3>${title}</h3>
            <div class="rating-stars" data-title-id="${index}">
                <span data-i18n="rate_title">Rate this title</span>:
                <button class="star" data-rating="1">★</button>
                <button class="star" data-rating="2">★</button>
                <button class="star" data-rating="3">★</button>
                <button class="star" data-rating="4">★</button>
                <button class="star" data-rating="5">★</button>
            </div>
            <div class="title-feedback">
                <div class="title-feedback-text">
                    <input type="text" placeholder="${translations[currentLanguage].feedback_placeholder || 'Your feedback on this title...'}" data-title-id="${index}">
                </div>
                <button class="title-feedback-submit" data-title-id="${index}">${translations[currentLanguage].send_feedback || 'Send'}</button>
            </div>
            <div class="feedback-sent" id="feedback-sent-${index}">${translations[currentLanguage].feedback_sent || 'Thank you for your feedback!'}</div>
            <div class="title-actions">
                <button class="copy-btn" data-title="${title}">${translations[currentLanguage].copy_button || 'Copy'}</button>
                <button class="favorite-btn">${translations[currentLanguage].favorite_button || 'Favorite'}</button>
                <button class="edit-btn" data-title="${title}">${translations[currentLanguage].edit_button || 'Edit'}</button>
            </div>
        `;
        
        titlesContainer.appendChild(titleCard);
    });
    
    // 添加按钮事件监听器
    addCopyButtonListeners();
    addFavoriteButtonListeners();
    addEditButtonListeners();
    addRatingStarsListeners();
    addFeedbackSubmitListeners();
}

// 添加评分星星的事件监听器
function addRatingStarsListeners() {
    const stars = document.querySelectorAll('.rating-stars .star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            const titleId = this.parentElement.getAttribute('data-title-id');
            
            // 清除所有星星的active状态
            const siblingStars = this.parentElement.querySelectorAll('.star');
            siblingStars.forEach(s => s.classList.remove('active'));
            
            // 设置当前星星及之前的星星为active
            for (let i = 0; i < rating; i++) {
                siblingStars[i].classList.add('active');
            }
            
            // 保存评分（可以发送到服务器或保存在本地）
            saveTitleRating(titleId, rating);
        });
    });
}

// 添加反馈提交按钮的事件监听器
function addFeedbackSubmitListeners() {
    const submitButtons = document.querySelectorAll('.title-feedback-submit');
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const titleId = this.getAttribute('data-title-id');
            const feedbackInput = document.querySelector(`.title-feedback-text input[data-title-id="${titleId}"]`);
            const feedback = feedbackInput.value.trim();
            
            if (feedback) {
                // 保存反馈（可以发送到服务器或保存在本地）
                saveTitleFeedback(titleId, feedback);
                
                // 清空输入框
                feedbackInput.value = '';
                
                // 显示感谢信息
                const feedbackSent = document.getElementById(`feedback-sent-${titleId}`);
                feedbackSent.style.display = 'block';
                
                // 3秒后隐藏感谢信息
                setTimeout(() => {
                    feedbackSent.style.display = 'none';
                }, 3000);
            }
        });
    });
}

// 保存标题评分
function saveTitleRating(titleId, rating) {
    console.log(`Title ${titleId} rated: ${rating} stars`);
    // 这里可以添加发送到服务器的代码
    // 例如使用fetch API发送到后端
    
    // 示例：保存到localStorage
    const ratings = JSON.parse(localStorage.getItem('titleRatings') || '{}');
    ratings[titleId] = rating;
    localStorage.setItem('titleRatings', JSON.stringify(ratings));
}

// 保存标题反馈
function saveTitleFeedback(titleId, feedback) {
    console.log(`Title ${titleId} feedback: ${feedback}`);
    // 这里可以添加发送到服务器的代码
    
    // 示例：保存到localStorage
    const feedbacks = JSON.parse(localStorage.getItem('titleFeedbacks') || '{}');
    feedbacks[titleId] = feedback;
    localStorage.setItem('titleFeedbacks', JSON.stringify(feedbacks));
} 