// 弹窗功能管理
class PopupManager {
    constructor() {
        this.moreBtn = document.querySelector('.more-btn');
        this.closeBtn = document.querySelector('.close-btn');
        this.popupMenu = document.querySelector('.popup-menu');
        this.menuItems = document.querySelectorAll('.menu-item');
        
        this.init();
    }

    init() {
        // 绑定打开弹窗事件
        this.moreBtn.addEventListener('click', () => this.openPopup());
        
        // 绑定关闭弹窗事件
        this.closeBtn.addEventListener('click', () => this.closePopup());
        
        // 绑定菜单项点击事件
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => this.handleMenuClick(e));
        });

        // 添加动画结束监听
        this.popupMenu.addEventListener('transitionend', (e) => {
            if (!this.popupMenu.classList.contains('active')) {
                this.popupMenu.style.display = 'none';
                // 在弹窗完全关闭后重置菜单项样式
                this.resetMenuItems();
            }
        });
    }

    openPopup() {
        // 先显示弹窗
        this.popupMenu.style.display = 'block';
        // 强制重排
        this.popupMenu.offsetHeight;
        // 清除菜单项的内联样式
        this.menuItems.forEach(item => {
            item.style.opacity = '';
            item.style.transform = '';
        });
        // 添加活动类触发动画
        this.popupMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closePopup() {
        // 移除活动类开始关闭动画
        this.popupMenu.classList.remove('active');
        // 设置菜单项的关闭状态
        this.menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
        document.body.style.overflow = '';
    }

    // 重置菜单项样式的方法
    resetMenuItems() {
        this.menuItems.forEach(item => {
            item.style.opacity = '';
            item.style.transform = '';
        });
    }

    handleMenuClick(event) {
        const section = event.target.textContent.toLowerCase();
        
        // 添加关闭动画
        this.closePopup();
        
        // 等待动画完成后滚动
        setTimeout(() => {
            const targetSection = document.getElementById(section);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }
}

// 初始化弹窗管理器
document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
}); 