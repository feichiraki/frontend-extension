const n = 6;
const bubbles = document.querySelector('.bubbles');
// 动画结束之后，把元素移除
bubbles.addEventListener('animationed', (e) => {
    e.target.remove();
})

// 创建泡泡函数
function createBubbles() {
    // 获取视口宽度
    const vw = document.documentElement.clientWidth;
    for (let i = 0; i < n; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        /*
        --x: 100px;
        --s: 50px;
        --d: 2s;
         */

        // 泡泡尺寸（随机 50~100）
        const s = Math.random() * 100 + 50;
        // x坐标(随机) min = 0,max = vw - s
        const x = Math.random() * (vw - s);
        // 动画时间(1~2)
        const d = Math.random() * 2 + 1;

        // 将计算所得设置到css属性中去
        bubble.style.setProperty('--x', `${x}px`);
        bubble.style.setProperty('--s', `${s}px`);
        bubble.style.setProperty('--d', `${d}s`);
        bubbles.appendChild(bubble);
    }
}

// 调用函数
createBubbles()
// 每隔500ms创建一波泡泡
setInterval(createBubbles, 500)

