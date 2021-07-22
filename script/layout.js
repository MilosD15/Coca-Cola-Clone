// menu button
var menuBtn = document.querySelector("span.fas");
// navigation links menu for small screens
var sideNav = document.querySelector(".side");
// function that shows navigation menu according to viewport width
function DisplayNavbars()
{
    if(window.innerWidth < 750)
    {
        if(menuBtn.classList.value.match("fa-times") != null)
        {
            sideNav.style.opacity = 0;
            sideNav.style.pointerEvents = "none";
            menuBtn.classList.add("fa-bars");
            menuBtn.classList.remove("fa-times");
        }
        else
        {
            sideNav.style.opacity = 1;
            sideNav.style.pointerEvents = "all";
            menuBtn.classList.remove("fa-bars");
            menuBtn.classList.add("fa-times");
            document.addEventListener("click", e =>
            {
                if(e.target.matches(".side, span.fas") == false)
                {
                    sideNav.style.opacity = 0;
                    sideNav.style.pointerEvents = "none";
                    menuBtn.classList.add("fa-bars");
                    menuBtn.classList.remove("fa-times");
                }
            });
        }
    }
}
// simple event listener of menu button for displaying navigation menu
menuBtn.addEventListener("click", DisplayNavbars);
// some actions that should be performed when browser window is resized
window.addEventListener("resize", () =>
{
    if(window.innerWidth > 750)
    {
        var navbar = document.querySelector(".navbar");
        navbar.style.opacity = 1;
        sideNav.style.opacity = 0;
        sideNav.style.pointerEvents = "none";
    }
    else{
        sideNav.style.opacity = 0;
        sideNav.style.pointerEvents = "none";
    }
});
// some actions that should be performed when the page is loaded
window.addEventListener("load", () =>
{
    var logo = document.querySelector(".logo");
    logo.style.opacity = 1;
    if(window.innerWidth > 750)
    {
        var navbar = document.querySelector(".navbar");
        navbar.style.opacity = 1;
    }
    else{
        sideNav.style.opacity = 0;
        sideNav.style.pointerEvents = "none";
    }
    var start = document.querySelector(".startsection");
    start.style.opacity = 1;
    var loader = document.getElementById("loader");
    loader.style.opacity = 0;
    loader.style.pointerEvents = "none";
    var header = document.getElementsByTagName("header")[0];
    header.style.opacity = 1;
    document.body.style.overflow = "initial";
    var naslov = document.querySelector(".startsection h1");
    naslov.style.opacity = 1;
    DisplayInfoWindow();
    DisplayInfoWindowForImages();
    Copyright();
});
// function for info panel
function DisplayInfoWindow()
{
    var info = document.querySelector(".info");
    if(localStorage.getItem("Seen") == "Yes")
    {
        info.style.visibility = "hidden";
    }
    else
    {
        info.style.visibility = "visible";
        info.style.animationName = "fade";
    }
}
var OKbtn = document.querySelector(".info .btns .ok");
OKbtn.addEventListener("click", () => 
{
    localStorage.setItem("Seen", "Yes");
    var info = document.querySelector(".info");
    info.style.animationName = "disappearing";
    location.reload();
    return false;
});
var CANCELbtn = document.querySelector(".info .btns .cancel");
CANCELbtn.addEventListener("click", () =>
{
    localStorage.setItem("Seen", "No");
    window.location.href = "https://www.google.com/";
});
// function for info panel related to images on website
function DisplayInfoWindowForImages()
{
    var info = document.querySelector(".infoImages");
    if(localStorage.getItem("InfoImages") == "Yes")
    {
        info.style.visibility = "hidden";
    }
    else
    {
        info.style.visibility = "visible";
        info.style.animationName = "fade";
    }
}
var OKbtnImages = document.querySelector(".infoImages .btns .ok");
OKbtnImages.addEventListener("click", () => 
{
    localStorage.setItem("InfoImages", "Yes");
    var info = document.querySelector(".infoImages");
    info.style.animationName = "disappearing";
    if(localStorage.getItem("Seen") == "Yes")
    {
        location.reload();
        return false;
    }
});
var CANCELbtnImages = document.querySelector(".infoImages .btns .cancel");
CANCELbtnImages.addEventListener("click", () =>
{
    localStorage.setItem("InfoImages", "No");
    window.location.href = "https://www.google.com/";
});
// function that adds copyright 
function Copyright() {
    var div = document.createElement("div");
    div.classList.add("author");
    div.innerHTML = "&#169; Copyright 2021 | Web Development and Design by ";
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://www.fiverr.com/milosd15?up_rollout=true";
    a.innerText = "Miško";
    div.appendChild(a);
    document.body.appendChild(div);
}