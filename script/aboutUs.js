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
    var loader = document.getElementById("loader");
    loader.style.opacity = 0;
    loader.style.pointerEvents = "none";
    var header = document.getElementsByTagName("header")[0];
    header.style.opacity = 1;
    var img_of_building = document.querySelector("main .con-for-image img");
    var desc_of_image = document.querySelector("main .con-for-image h3");
    desc_of_image.innerHTML = img_of_building.getAttribute("alt");
    var right_edge_of_button = document.querySelector("main .con-for-text article .link .right");
    if(navigator.userAgent.match("Firefox") != null)
    {
        right_edge_of_button.style.right = "3px";
    }
    else {
        right_edge_of_button.style.right = "-2px";
    }
});
// variable that count how much time user hovers the button
var time = 0;
// 'See more' button and its event listeners that changes animation delay of specified edge of button
// depending on how much time user hovers the button
var seeMoreBtn = document.querySelector("main .con-for-text article a");
seeMoreBtn.addEventListener("mouseenter", () => {
    StartTimer();
    var root = document.querySelector(":root");
    root.style.setProperty("--delay-bottom", "0s");
    root.style.setProperty("--delay-right", "0.3s");
    root.style.setProperty("--delay-top", "0.45s");
    root.style.setProperty("--delay-left", "0.75s");
});
seeMoreBtn.addEventListener("mouseleave", () => {
    var holding = StopTimer().toFixed(2);
    var root = document.querySelector(":root");
    if(holding > 0 && holding <= 0.3)
    {
        root.style.setProperty("--delay-bottom", "0s");
    }
    if(holding > 0.3 && holding <= 0.45)
    {
        root.style.setProperty("--delay-bottom", "0.15s");
        root.style.setProperty("--delay-right", "0s");
    }
    if(holding > 0.45 && holding <= 0.75)
    {
        root.style.setProperty("--delay-bottom", "0.45s");
        root.style.setProperty("--delay-right", "0.3s");
        root.style.setProperty("--delay-top", "0s");
    }
    if(holding > 0.75)
    {
        root.style.setProperty("--delay-bottom", "0.6s");
        root.style.setProperty("--delay-right", "0.45s");
        root.style.setProperty("--delay-top", "0.15s");
        root.style.setProperty("--delay-left", "0s");
    }
    time = 0;
});
// timer varibale
var timer;
// function that starts timer
function StartTimer()
{
    timer = setInterval(() => {
        time += 0.01;
    }, 10);
}
// function that stops timer
function StopTimer()
{
    clearInterval(timer);
    return time;
}