function changeColor() {
    const colorBox = document.getElementById('colorBox');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
}
