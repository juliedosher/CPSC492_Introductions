var isDark = true;              // default value - dark mode on

function toggleLightMode() {
    if (isDark) {
        document.getElementById('style-mode').setAttribute('href', './style/light.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-light navbar-light navbar-fixed-top";
        document.getElementById("modeImage").src = './img/moon.png';
        isDark = false;
   
    } else {
        document.getElementById('style-mode').setAttribute('href', './style/dark.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top";
        document.getElementById("modeImage").src = './img/sun.png';
        isDark = true;
    }
}
