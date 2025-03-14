// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 设置页脚年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 获取表单元素
    const titleForm = document.getElementById('title-form');
    const resultsSection = document.getElementById('results-section');
    const regenerateBtn = document.getElementById('regenerate-btn');
    
    // 如果在首页，添加表单提交事件监听器
    if (titleForm) {
        titleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            generateTitles();
        });
    }
    
    // 如果存在重新生成按钮，添加点击事件监听器
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', function() {
            generateTitles();
        });
    }
    
    // FAQ页面的折叠功能
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('h2');
            const answer = item.querySelector('.faq-answer');
            
            // 初始状态下显示答案，不需要折叠
            // 如果需要折叠效果，可以取消下面的注释
            /*
            answer.style.display = 'none';
            
            question.addEventListener('click', function() {
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
            
            // 添加视觉提示
            question.style.cursor = 'pointer';
            question.innerHTML += ' <span class="toggle-icon">+</span>';
            */
        });
    }
});

// 复制文本到剪贴板的函数
function copyToClipboard(text) {
    // 创建一个临时textarea元素
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // 选择文本并复制
    textarea.select();
    document.execCommand('copy');
    
    // 移除临时元素
    document.body.removeChild(textarea);
    
    // 显示复制成功提示
    alert('已复制到剪贴板！');
}

// 添加复制按钮事件监听器
function addCopyButtonListeners() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const titleText = this.getAttribute('data-title');
            copyToClipboard(titleText);
        });
    });
}

// 添加收藏按钮事件监听器
function addFavoriteButtonListeners() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 这里可以实现收藏功能，例如保存到localStorage
            alert('收藏功能即将推出！');
        });
    });
}

// 添加编辑按钮事件监听器
function addEditButtonListeners() {
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const titleText = this.getAttribute('data-title');
            const newTitle = prompt('编辑标题:', titleText);
            
            if (newTitle && newTitle.trim() !== '') {
                // 更新标题显示
                const titleCard = this.closest('.title-card');
                const titleElement = titleCard.querySelector('h3');
                titleElement.textContent = newTitle;
                
                // 更新复制按钮的data-title属性
                const copyButton = titleCard.querySelector('.copy-btn');
                copyButton.setAttribute('data-title', newTitle);
                
                // 更新编辑按钮的data-title属性
                this.setAttribute('data-title', newTitle);
            }
        });
    });
} 