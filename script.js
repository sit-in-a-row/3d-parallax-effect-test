document.getElementById('gridContainer').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 70; // Y축 기준 회전 각도
    const rotateY = (x - centerX) / 70; // X축 기준 회전 각도

    for (let i = 1; i <= 5; i++) {
        const grid = document.getElementById(`grid${i}`);
        const depth = 20; // 회전 깊이 조절을 위한 변수, 필요에 따라 조절
        grid.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`;
    }
});

// gridContainer에서 마우스가 벗어났을 때 회전 효과 초기화
document.getElementById('gridContainer').addEventListener('mouseleave', function() {
    for (let i = 1; i <= 5; i++) {
        const grid = document.getElementById(`grid${i}`);
        grid.style.transform = 'none';
    }
});
