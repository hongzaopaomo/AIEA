class NavbarManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.scrollDirection = 'up';
        this.navbarHeight = this.navbar.offsetHeight;
        
        this.init();
    }

    init() {
        // 使用 requestAnimationFrame 来优化滚动性能
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => this.handleScroll());
        });
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        
        // 确定滚动方向
        this.scrollDirection = currentScrollY > this.lastScrollY ? 'down' : 'up';
        
        // 根据滚动方向和位置决定是否显示导航栏
        if (this.scrollDirection === 'down' && currentScrollY > this.navbarHeight) {
            // 向下滚动且已经滚动超过导航栏高度
            this.navbar.classList.add('hide');
        } else if (this.scrollDirection === 'up') {
            // 向上滚动时显示导航栏
            this.navbar.classList.remove('hide');
        }

        // 更新上次滚动位置
        this.lastScrollY = currentScrollY;
    }
}

// 初始化导航栏管理器
document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
}); 