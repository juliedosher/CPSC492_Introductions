// Document Elements

const aAbout = document.getElementById("aAbout");
const aClass = document.getElementById("aClass");
const aContact = document.getElementById("aContact");

const imgGithub = document.getElementById("imgGithub");
const imgLightMode = document.getElementById("imgLightMode");

const styleMode = document.getElementById('style-mode');

const nav = document.getElementById("nav");

const bodyAbout = document.getElementById("bodyAbout");
const bodyClass = document.getElementById("bodyClass");
const bodyContact = document.getElementById("bodyContact");

bodyClass.style.display = "none";
bodyContact.style.display = "none";

const navLinks = ["aAbout", "aClass", "aContact"];
const bodyDivs = ["bodyAbout", "bodyClass", "bodyContact"];


// Toggles which link is active

aAbout.addEventListener("click", toggleActiveBody);
aAbout.myParam = navLinks[0];

aClass.addEventListener("click", toggleActiveBody);
aClass.myParam = navLinks[1];

aContact.addEventListener("click", toggleActiveBody);
aContact.myParam = navLinks[2];

function toggleActiveBody(event) {
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] == event.currentTarget.myParam) {
            document.getElementById(navLinks[i]).className = "nav-link active";
            document.getElementById(bodyDivs[i]).style.display = "inline";
        }

        else {
            document.getElementById(navLinks[i]).className = "nav-link";
            document.getElementById(bodyDivs[i]).style.display = "none";
        }
     }
}


// Toggles light/dark mode

var isDark = true;              // default value - dark mode on
document.getElementById("btnLight").addEventListener("click", toggleLightMode);
document.addEventListener("keyup", function(event) {
    if (event.key === 'l') {
        toggleLightMode();
    }
});

function toggleLightMode() {
    if (isDark) {               // switch to light mode
        styleMode.setAttribute('href', './style/light.css');
        nav.className = "navbar navbar-expand-sm navbar-custom navbar-light navbar-fixed-top";
        imgLightMode.src = './img/moon.png';
        imgGithub.src = './img/github-lightMode.png';
        isDark = false;
   
    } else {                    // switch to dark mode
        styleMode.setAttribute('href', './style/dark.css');
        nav.className = "navbar navbar-expand-sm navbar-custom navbar-dark navbar-fixed-top";
        imgLightMode.src = './img/sun.png';
        imgGithub.src = './img/github-darkMode.png';
        isDark = true;
    }
}