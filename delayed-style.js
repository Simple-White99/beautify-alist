function loadStyles() {
    // 加载 Google Fonts
    const googleFonts1 = document.createElement('link');
    googleFonts1.rel = 'stylesheet';
    googleFonts1.href = 'https://fonts.googleapis.com/css2?family=Baloo+Paaji+2';
    document.head.appendChild(googleFonts1);

    const googleFonts2 = document.createElement('link');
    googleFonts2.rel = 'stylesheet';
    googleFonts2.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC';
    document.head.appendChild(googleFonts2);

    // 加载主CSS样式
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/aliststyle.css')
        .then(response => response.text())
        .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        });