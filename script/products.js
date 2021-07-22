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
    if(window.innerWidth <= 500)
    {
        var title = document.querySelector(".window h1");
        if(title.innerHTML != "Coca Cola")
        {
            var naslov = document.querySelector("main .wrapper .container article h1");
            naslov.style.left = "8%";
        }
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
    document.body.style.overflow = "initial";
});
//function for opening pop-up window for more info about specific product
function More()
{
    const popUp = document.getElementsByClassName("window")[0];
    popUp.style.visibility = "visible";
    popUp.style.transform = "scale(1)";
    popUp.style.opacity = 1;
}
//function for hiding pop-up window for more info about specific product
function Hide()
{
    const popUp = document.getElementsByClassName("window")[0];
    popUp.style.visibility = "hidden";
    popUp.style.transform = "scale(0)";
    popUp.style.opacity = 0;
}
// right arrow and its event click
var rightArrow = document.querySelector("main .wrapper i.right");
rightArrow.addEventListener("click", () => 
{
    var arrow = "right";
    var bacImage = document.querySelector("main .wrapper .container");
    var pos = window.getComputedStyle(bacImage).backgroundImage.lastIndexOf('/');
    var image = window.getComputedStyle(bacImage).backgroundImage.substr(pos + 1);
    var prePath = window.getComputedStyle(bacImage).backgroundImage.substr(0, pos + 1);
    pos = image.length;
    image = image.substr(0, pos - 2);
    var index;
    if(image == "coca-cola-background.jpg")
    {
        index = 1;
    }
    if(image == "fanta-background.jpg")
    {
        index = 2;
    }
    if(image == "sprite-background.jpg")
    {
        index = 3;
    }
    if(image == "schweppes-background.jpg")
    {
        index = 4;
    }
    if(image == "fuze-tea-background.jpg")
    {
        index = 5;
    }
    index = FilterIndex(index, arrow);
    bacImage.style.backgroundImage = ChangeImages(prePath, index, arrow);
    ChangeText(index);
    ChangeStyle(index);
    var flag = document.querySelector("main .wrapper .container .flag");
    if(flag.style.animationName != "fejdic")
    {
        flag.style.animationName = "fejdic";
    }
    else
    {
        flag.style.animationName = "fade";
    }
});
// left arrow and its event click
var leftArrow = document.querySelector("main .wrapper i.left");
leftArrow.addEventListener("click", () => 
{
    var arrow = "left";
    var bacImage = document.querySelector("main .wrapper .container");
    var pos = window.getComputedStyle(bacImage).backgroundImage.lastIndexOf('/');
    var image = window.getComputedStyle(bacImage).backgroundImage.substr(pos + 1);
    var prePath = window.getComputedStyle(bacImage).backgroundImage.substr(0, pos + 1);
    pos = image.length;
    image = image.substr(0, pos - 2);
    var index;
    if(image == "coca-cola-background.jpg")
    {
        index = 1;
    }
    if(image == "fanta-background.jpg")
    {
        index = 2;
    }
    if(image == "sprite-background.jpg")
    {
        index = 3;
    }
    if(image == "schweppes-background.jpg")
    {
        index = 4;
    }
    if(image == "fuze-tea-background.jpg")
    {
        index = 5;
    }
    index = FilterIndex(index, arrow);
    bacImage.style.backgroundImage = ChangeImages(prePath, index);
    ChangeText(index);
    ChangeStyle(index);
    var flag = document.querySelector("main .wrapper .container .flag");
    if(flag.style.animationName != "fejdic")
    {
        flag.style.animationName = "fejdic";
    }
    else
    {
        flag.style.animationName = "fade";
    }
});
// function that filters an index according to arrow
function FilterIndex(index, arrow)
{
    if(arrow == "left")
    {
        if(index != 1)
        {
            index--;
            return index;
        }
        if(index == 1)
        {
            index = 5;
            return index;
        }
    }
    if(arrow == "right")
    {
        if(index != 5)
        {
            index++;
            return index;
        }
        if(index == 5)
        {
            index = 1;
            return index;
        }
    }
}
// function that changes the images according to an index
function ChangeImages(prePath, index)
{
    var url, preUrl;
    var previewImg = document.querySelector(".window .con .for-image div.img img");
    var pre = previewImg.getAttribute("src").substr(0, previewImg.getAttribute("src").lastIndexOf("/") + 1);
    if(index == 1)
    {
        url = prePath + 'coca-cola-background.jpg")';
        preUrl = pre + 'coca-cola-preview.jpg';
    }
    if(index == 2)
    {
        url = prePath + 'fanta-background.jpg")';
        preUrl = pre + 'fanta-preview.jpg';
    }
    if(index == 3)
    {
        url = prePath + 'sprite-background.jpg")';
        preUrl = pre + 'sprite-preview.jpg';
    }
    if(index == 4)
    {
        url = prePath + 'schweppes-background.jpg")';
        preUrl = pre + 'schweppes-preview.jpg';
    }
    if(index == 5)
    {
        url = prePath + 'fuze-tea-background.jpg")';
        preUrl = pre + 'fuze-tea-preview.jpg';
    }
    previewImg.setAttribute("src", preUrl);
    return url;
}
// function that changes all text related to slider according to index
function ChangeText(index)
{
    var title = document.querySelector("main .wrapper .container article h1");
    var preTitle = document.querySelector(".window h1");
    var description = document.querySelectorAll(".window .con .for-lists .list ul li");
    if(index == 1)
    {
        title.innerHTML = "Coca Cola";
        preTitle.innerHTML = "Coca Cola";
        description[0].innerHTML = "Coca-Cola is a carbonated soft drink sold in stores, ";
        description[0].innerHTML += "restaurants, and vending machines in more than 200 countries."
        description[1].innerHTML = "It is produced by The Coca-Cola Company of Atlanta, Georgia, "
        description[1].innerHTML += "and is often referred to simply as Coke, a registered trademark "
        description[1].innerHTML += "of The Coca-Cola Company in the United States since March 27, 1944."
        description[2].innerHTML = "Originally intended as a patent medicine when it was "
        description[2].innerHTML += "invented in the late 19th century by John Pemberton, Coca-Cola ";
        description[2].innerHTML += "was bought out by businessman Asa Griggs Candler, whose "
        description[2].innerHTML += "marketing tactics led Coke to its dominance of the world "
        description[2].innerHTML += "soft-drink market throughout the 20th century."
    }
    if(index == 2)
    {
        title.innerHTML = "Fanta";
        preTitle.innerHTML = "Fanta";
        description[0].innerHTML = "Fanta is a brand of fruit-flavored carbonated soft drinks created by ";
        description[0].innerHTML += "Coca-Cola Deutschland under the leadership of German businessman Max Keith.";
        description[1].innerHTML = "There are more than 150 flavors worldwide. Fanta originated as a Coca-Cola ";
        description[1].innerHTML += "substitute in 1940 due to the American trade embargo of Nazi Germany which ";
        description[1].innerHTML += "affected the availability of Coca-Cola ingredients; the current formulation ";
        description[1].innerHTML += "was developed in Italy."
        description[2].innerHTML = "Fanta is known for its upbeat colorful advertising; in the United States, it ";
        description[2].innerHTML += "showcases The Fantanas, a group of young female models, each of whom promotes ";
        description[2].innerHTML += "an individual Fanta flavor. The orange Fanta of today was produced for the ";
        description[2].innerHTML += "first time in Italy, in Naples, in 1955.";
    }
    if(index == 3)
    {
        title.innerHTML = "Sprite";
        preTitle.innerHTML = "Sprite";
        description[0].innerHTML = "Sprite is a colorless, lemon and lime-flavored soft drink ";
        description[0].innerHTML += "created by The Coca-Cola Company."
        description[1].innerHTML = "It was first developed in West Germany in 1959 as Fanta Klare";
        description[1].innerHTML += " Zitrone ('Clear Lemon Fanta') and was introduced in the United";
        description[1].innerHTML += " States under the current brand name Sprite in 1961 as a competitor";
        description[1].innerHTML += " to 7 Up. Sprite comes in multiple flavours, including cranberry,";
        description[1].innerHTML += " cherry, grape, orange, and vanilla.";
        description[2].innerHTML = "Sprite advertising often makes use of the portmanteau word lymon, ";
        description[2].innerHTML += "a combination of the words 'lemon' and 'lime'. ";
        description[2].innerHTML += "Additionally, the bottle of the beverage has several concave spots, ";
        description[2].innerHTML += "an attempt to emulate the bubbles caused by the soda's carbonation.";
    }
    if(index == 4)
    {
        title.innerHTML = "Schweppes";
        preTitle.innerHTML = "Schweppes";
        description[0].innerHTML = "Schweppes is a beverage brand that originated in the Republic of ";
        description[0].innerHTML += "Geneva and that is sold around the world. It includes a variety ";
        description[0].innerHTML += "of lemonade, carbonated waters and ginger ales.";
        description[1].innerHTML = "Johann Jacob Schweppe founded the Schweppes Company in Geneva ";
        description[1].innerHTML += "in 1783 to sell carbonated water. Mainstay Schweppes products include ";
        description[1].innerHTML += "ginger ale (1870), bitter lemon (1957), and tonic water (the first carbonated tonic – 1871).";
        description[2].innerHTML = "The Coca-Cola Company owns the Schweppes brand in Ireland, UK and New ";
        description[2].innerHTML += "Zealand. In Hong Kong and Mainland China, Swire's subsidiary Swire ";
        description[2].innerHTML += "Coca-Cola produces Schweppes brand beverage.";
    }
    if(index == 5)
    {
        title.innerHTML = "Fuze Tea";
        preTitle.innerHTML = "Fuze Tea";
        description[0].innerHTML = "Fuze Tea is a soft drink brand launched in 2018 by The Coca-Cola Company. ";
        description[1].innerHTML = "Fruit tea and iced tea are produced and sold in various varieties under this ";
        description[1].innerHTML += "brand. In Switzerland, the drinks are marketed under the brand name Fuse Tea ";
        description[1].innerHTML += "in order to avoid unwanted vulgar associations.";
        description[2].innerHTML = "The predecessor of Fuze Tea is Nestea. Nestea comes from a cooperation with ";
        description[2].innerHTML += "Nestlé. In 2017, Coca-Cola decided to end its cooperation with Nestlé and ";
        description[2].innerHTML += "stop the production of Nestea for the time being. In ";
        description[2].innerHTML += "January 2018 the production of Fuze Tea started. From March 2020, the recipes ";
        description[2].innerHTML += "of the previous varieties have been replaced by new recipes that use brewed ";
        description[2].innerHTML += "tea instead of tea extract.";
    }
}
// function that changes some styling according to an index
function ChangeStyle(index)
{
    var root = document.querySelector(":root");
    var btn = document.querySelector("main .wrapper .container article button");
    var background;
    if(index == 1)
    {
        btn.style.left = "12%";
        background = "rgb(230, 14, 14)";
        var naslov = document.querySelector("main .wrapper .container article h1");
        naslov.style.color = "black";
        btn.style.color = "white";
        var btnArrow = document.querySelector("main .wrapper .container article button i");
        btnArrow.style.color = "white";
    }
    if(index == 2)
    {
        btn.style.left = "10%";
        background = "rgb(245, 120, 26)";
        var naslov = document.querySelector("main .wrapper .container article h1");
        naslov.style.color = "black";
        btn.style.color = "white";
        if(window.innerWidth <= 500)
        {
            naslov.style.left = "8%";
        }
        var btnArrow = document.querySelector("main .wrapper .container article button i");
        btnArrow.style.color = "white";
    }
    if(index == 3)
    {
        btn.style.left = "10%";
        background = "rgb(64, 157, 78)";
        var naslov = document.querySelector("main .wrapper .container article h1");
        naslov.style.color = "white";
        btn.style.color = "white";
        if(window.innerWidth <= 500)
        {
            naslov.style.left = "8%";
        }
        var btnArrow = document.querySelector("main .wrapper .container article button i");
        btnArrow.style.color = "white";
    }
    if(index == 4)
    {
        btn.style.left = "12%";
        background = "rgb(250, 188, 2)";
        var naslov = document.querySelector("main .wrapper .container article h1");
        naslov.style.color = "white";
        btn.style.color = "black";
        if(window.innerWidth <= 500)
        {
            naslov.style.left = "8%";
        }
        var btnArrow = document.querySelector("main .wrapper .container article button i");
        btnArrow.style.color = "black";
    }
    if(index == 5)
    {
        btn.style.left = "12%";
        background = "rgb(159, 55, 38)";
        var naslov = document.querySelector("main .wrapper .container article h1");
        naslov.style.color = "black";
        btn.style.color = "white";
        if(window.innerWidth <= 500)
        {
            naslov.style.left = "8%";
        }
        var btnArrow = document.querySelector("main .wrapper .container article button i");
        btnArrow.style.color = "white";
    }
    root.style.setProperty("--btnColor", background);
}