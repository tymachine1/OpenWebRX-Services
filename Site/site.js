load();
function load() {
    let background = document.getElementById('background');
    let preloader = document.getElementById('preloader');
    let bar = document.getElementById('bar');
    let msg = document.getElementById('msg');
    window.addEventListener("load", function(){
        preloader.style.display = 'none';
        background.style.display = 'none';
        msg.style.display = 'none';
        bar.style.display = 'initial';
    })
}

function settings() {
    var settings = document.getElementById("settings");

    if (settings.style.display == "none") {
        settings.style.display = "initial";
    } else if (settings.style.display == "initial") {
        settings.style.display = "none";
    } else {
        settings.style.display = "initial";
    }
}

function updates() {
    var settings = document.getElementById("updates")

    if (settings.style.display == "none") {
        settings.style.display = "initial"
    } else if (settings.style.display == "initial") {
        settings.style.display = "none";
    } else {
        settings.style.display = "initial"
    }
}

if(localStorage.getItem("title").text != "") {
    document.title = localStorage.getItem("title");
    document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem('favico');
}

function titleSet(text) {
    if(text != "") {
        document.title = text;
        localStorage.setItem("title", text);
    }
    
    else {
        localStorage.removeItem("title");
        document.title = "Zaluea";
    }
}

function icoSet(text1) {
    document.querySelector("link[rel='shortcut icon']").href = text1;
    localStorage.setItem('favico', text1);
}

function reset() {
    localStorage.removeItem('title');
    localStorage.removeItem('favico');
    window.location.href = "";
}