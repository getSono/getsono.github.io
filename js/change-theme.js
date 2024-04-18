var cssroot = document.querySelector(":root");

function changeTheme() {
    if (getComputedStyle(cssroot).getPropertyValue("--bg") == "#FFFFFF") {
        cssroot.style.setProperty("--bg", "#202020");
        cssroot.style.setProperty("--theme-hover", "#575757");
        cssroot.style.setProperty("--bg2", "#2b2b2b");
        cssroot.style.setProperty("--communicate-color", "white");
        document.getElementById("themeSwitcher").innerHTML = "dark_mode";
        document.getElementById("themeSwitcher").style.color = "white";
    }
    else {
        cssroot.style.setProperty("--bg", "#FFFFFF");
        cssroot.style.setProperty("--theme-hover", "#d8d6d6");
        cssroot.style.setProperty("--bg2", "#dadada");
        cssroot.style.setProperty("--communicate-color", "black");
        document.getElementById("themeSwitcher").innerHTML = "light_mode";
        document.getElementById("themeSwitcher").style.color = "black";
    }
}