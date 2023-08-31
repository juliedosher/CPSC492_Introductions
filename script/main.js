document.getElementById("btnLight").addEventListener("click", toggleLightMode);

const aAbout = document.getElementById("aAbout");
const aClass = document.getElementById("aClass");
const aContact = document.getElementById("aContact");
navLinks = ["aAbout", "aClass", "aContact"];

aAbout.addEventListener("click", toggleActiveBody);
aAbout.myParam = navLinks[0];

aClass.addEventListener("click", toggleActiveBody);
aClass.myParam = navLinks[1];

aContact.addEventListener("click", toggleActiveBody);
aContact.myParam = navLinks[2];


var isDark = true;              // default value - dark mode on

function toggleLightMode() {
    if (isDark) {
        document.getElementById('style-mode').setAttribute('href', './style/light.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm navbar-custom navbar-light navbar-fixed-top";
        document.getElementById("imgMode").src = './img/moon.png';
        isDark = false;
   
    } else {
        document.getElementById('style-mode').setAttribute('href', './style/dark.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm navbar-custom navbar-dark navbar-fixed-top";
        document.getElementById("imgMode").src = './img/sun.png';
        isDark = true;
    }
}

function toggleActiveBody(evt) {
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] == evt.currentTarget.myParam) {
            document.getElementById(navLinks[i]).className = "nav-link active";
        }
        else {
            document.getElementById(navLinks[i]).className = "nav-link";
        }
     }
}

