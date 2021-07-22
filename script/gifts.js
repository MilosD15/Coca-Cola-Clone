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
    document.body.style.overflow = "initial";
});
// selected option button
var select = document.getElementsByClassName("selected")[0];
// event click for selected option button
select.addEventListener("click", () => {
    var options = document.getElementsByClassName("drink");
    var arrow = document.querySelector("main .con .select .selected .arrow");
    if(window.getComputedStyle(arrow).borderTopColor != "rgb(0, 0, 0)")
    {
        for(var i = 0; i < options.length;i++)
        {
            options[i].style.display = "none";
        }
        arrow.style.borderColor = "black transparent transparent transparent";
        arrow.style.top = "0.9em";
    }
    else
    {
        for(var i = 0; i < options.length;i++)
        {
            options[i].style.display = "block";
        }
        arrow.style.borderColor = "transparent transparent black transparent";
        arrow.style.top = "0.5em";
    }
});
// all options of select menu
var options = document.getElementsByClassName("drink");
// all actions that should be performed for every option of select menu according to selected option
for(let k = 0; k < options.length; k++)
{
    options[k].addEventListener("click", (k) => {
        var wrapper = document.querySelector("main .con .wrapper");
        var select_text = document.querySelector("main .con .select .selected .text");
        select_text.innerHTML = k.target.innerHTML;
        for(var j = 0; j < options.length; j++)
        {
            if(options[j].classList.value.match("active") != null)
            {
                options[j].classList.remove("active");
            }
        }
        k.target.classList.add("active");
        for(var i = 0; i < options.length;i++)
        {
            options[i].style.display = "none";
        }
        var arrow = document.querySelector("main .con .select .selected .arrow");
        arrow.style.borderColor = "black transparent transparent transparent";
        arrow.style.top = "0.9em";
        ChangeImages(k.target.innerHTML);
        ChangeLabel(k.target.innerHTML);
        ChangeCode(k.target.innerHTML);
        ChangeCodeName(k.target.innerHTML);
        if(wrapper.style.animationName == "fade1")
        {
            wrapper.style.animationName = "fade2";
        }
        else
        {
            wrapper.style.animationName = "fade1";
        }
    });
}
// function below changes all images depending on the selected option
function ChangeImages(text)
{
    var drink = document.querySelector("main .con .wrapper .drinks img");
    var gift = document.querySelector("main .con .wrapper .gift img");
    var drink_and_gift = document.querySelector("main .con .wrapper .fullPack img");
    if(text == "Coca Cola") {
        drink.setAttribute("src", "../images/coca-cola.png");
        gift.setAttribute("src", "../images/coca-cola-gift.png");
        drink_and_gift.setAttribute("src", "../images/coca-cola-with-gift.png");
    }
    if(text == "Fanta") {
        drink.setAttribute("src", "../images/fanta.png");
        gift.setAttribute("src", "../images/fanta-gift.png");
        drink_and_gift.setAttribute("src", "../images/fanta-with-gift.png");
    }
    if(text == "Sprite") {
        drink.setAttribute("src", "../images/sprite.png");
        gift.setAttribute("src", "../images/sprite-gift.png");
        drink_and_gift.setAttribute("src", "../images/sprite-with-gift.png");
    }
    if(text == "Schweppes") {
        drink.setAttribute("src", "../images/schweppes.png");
        gift.setAttribute("src", "../images/schweppes-gift.png");
        drink_and_gift.setAttribute("src", "../images/schweppes-with-gift.png");
    }
    if(text == "Fuze Tea") {
        drink.setAttribute("src", "../images/fuze-tea.png");
        gift.setAttribute("src", "../images/fuze-tea-gift.png");
        drink_and_gift.setAttribute("src", "../images/fuze-tea-with-gift.png");
    }
}
// function that changes the title of an image depending on the selected option
function ChangeLabel(text)
{
    var drink_title = document.querySelector("main .con .wrapper .drinks h3");
    var gift_title = document.querySelector("main .con .wrapper .gift h3");
    if(text == "Coca Cola") {
        drink_title.innerHTML = "Coca Cola 0.5l";
        gift_title.innerHTML = "Beats Wireless Headphones";
    }
    if(text == "Fanta") {
        drink_title.innerHTML = "Fanta 0.5l";
        gift_title.innerHTML = "Telefunken Dynamic Microphone";
    }
    if(text == "Sprite") {
        drink_title.innerHTML = "Sprite 0.5l";
        gift_title.innerHTML = "Mechanical Gaming Keyboard";
    }
    if(text == "Schweppes") {
        drink_title.innerHTML = "Schweppes 0.5l";
        gift_title.innerHTML = "Hamster Wireless Computer Mouse";
    }
    if(text == "Fuze Tea") {
        drink_title.innerHTML = "Fuze Tea 0.5l";
        gift_title.innerHTML = "Brown Plush Teddy Bear";
    }
}
// a function that changes a promo code of the selected product
function ChangeCode(text)
{
    var labelCode = document.querySelector('.container .code .text');
    if(text == "Coca Cola") {
        labelCode.innerHTML = "3678";
    }
    if(text == "Fanta") {
        labelCode.innerHTML = "8963";
    }
    if(text == "Sprite") {
        labelCode.innerHTML = "5412";
    }
    if(text == "Schweppes") {
        labelCode.innerHTML = "1873";
    }
    if(text == "Fuze Tea") {
        labelCode.innerHTML = "6435";
    }
}
// POP UP FUNCTIONS
// function that changes code name in label for code in pop-up window
function ChangeCodeName(text) {
    var label = document.querySelector(".container .popUp form .code_label");
    var preText = label.innerHTML.substr(0, label.innerHTML.indexOf("promo") + 6);
    var after = label.innerHTML.substr(label.innerHTML.indexOf("code:") - 1, 6);
    var name;
    if(text == "Coca Cola") {
        name = "Coca Cola";
    }
    if(text == "Fanta") {
        name = "Fanta";
    }
    if(text == "Sprite") {
        name = "Sprite";
    }
    if(text == "Schweppes") {
        name = "Schweppes";
    }
    if(text == "Fuze Tea") {
        name = "Fuze Tea";
    }
    label.innerHTML = preText + name + after;
}
// opening pop-up window
var btn = document.querySelector("main button");
btn.addEventListener("click", () => {
    var popUp = document.querySelector(".container");
    var window = document.querySelector(".container .popUp");
    popUp.style.opacity = 1;
    popUp.style.pointerEvents = "all";
    popUp.style.animationName = "none";
    window.style.transform = "scale(1)";
});
// function for clearing pop-up form
function ClearForm() {
    var upperStar = document.querySelector(".container .popUp form .upper");
    var inputCode = document.querySelector(".container .popUp form #code");
    var lowerStar = document.querySelector(".container .popUp form .lower");
    var inputEmail = document.querySelector(".container .popUp form #email");
    var eye = document.querySelector(".container .popUp form i.fas");
    var field = document.querySelector(".container .popUp form #code");
    var hintBtn = document.querySelector(".container .popUp .hint");
    upperStar.style.opacity = 0;
    lowerStar.style.opacity = 0;
    inputCode.style.borderColor = "rgb(48, 48, 48)";
    inputEmail.style.borderColor = "rgb(48, 48, 48)";
    inputCode.value = "";
    inputEmail.value = "";
    if(eye.classList.value.match("fa-eye-slash") == null)
    {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        field.setAttribute("placeholder", "****");
        field.setAttribute("type", "password");
    }
    hintBtn.style.opacity = 0;
    hintBtn.style.pointerEvents = "none";
}
// hiding pop-up window
function Hide() {
    var popUp = document.querySelector(".container");
    var window = document.querySelector(".container .popUp");
    popUp.style.opacity = 0;
    popUp.pointerEvents = "none";
    popUp.style.animationName = "visibility";
    window.style.transform = "scale(0)";
    ClearForm();
}
// function that reveals or hides password
function PassReveal()
{
    var eye = document.querySelector(".container .popUp form i.fas");
    var field = document.querySelector(".container .popUp form #code");
    if(eye.classList.value.match("fa-eye-slash") == null)
    {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        field.setAttribute("placeholder", "****");
        field.setAttribute("type", "password");
    }
    else
    {
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        field.setAttribute("placeholder", "1234");
        field.setAttribute("type", "text");
    }
}
// function that focuses code input field
function activateCodeInput()
{
    var upperStar = document.querySelector(".container .popUp form .upper");
    var inputCode = document.querySelector(".container .popUp form #code");
    upperStar.style.opacity = 1;
    inputCode.style.borderColor = "red";
}
// function that returns code input field on its starting appearance
function deactivateCodeInput()
{
    var upperStar = document.querySelector(".container .popUp form .upper");
    var inputCode = document.querySelector(".container .popUp form #code");
    upperStar.style.opacity = 0;
    inputCode.style.borderColor = "rgb(48, 48, 48)";
}
// function that focuses email input field
function activateEmailInput()
{
    var lowerStar = document.querySelector(".container .popUp form .lower");
    var inputEmail = document.querySelector(".container .popUp form #email");
    lowerStar.style.opacity = 1;
    inputEmail.style.borderColor = "red";
}
// function that returns email input field on its starting appearance
function deactivateEmailInput()
{
    var lowerStar = document.querySelector(".container .popUp form .lower");
    var inputEmail = document.querySelector(".container .popUp form #email");
    lowerStar.style.opacity = 0;
    inputEmail.style.borderColor = "rgb(48, 48, 48)";
}
// function that shows message box with specified message
function showMessageBox(message, backColor = "darkgreen", color = "white")
{
    var con = document.querySelector(".full");
    var messageBox = document.querySelector(".full .alert .message");
    var okBtn = document.querySelector(".full .alert .btn button");
    messageBox.innerHTML = message;
    con.style.opacity = 1;
    con.style.pointerEvents = "all";
    con.style.animationName = "alert";
    okBtn.style.backgroundColor = backColor;
    okBtn.style.color = color;
}
// OK button of alert box and its event click
var alertBtn = document.querySelector(".full .alert .btn button");
alertBtn.addEventListener("click", e => {
    e.preventDefault();
    var con = document.querySelector(".full");
    con.style.opacity = 0;
    con.style.pointerEvents = "none";
    con.style.animationName = "none";
})
// function that checks if code or email is empty or null
function isEmpty(code, email) {
    var br = 0;
    if(code == "" || code == null)
    {
        activateCodeInput();
        br = 1;
    }
    else
    {
        deactivateCodeInput();
    }
    if(email == "" || email == null)
    {
        activateEmailInput();
        br = 1;
    }
    else
    {
        deactivateEmailInput();
    }
    return br;
}
// preventing reloading the page when 'Get a gift' button is clicked
var getGiftBtn = document.querySelector(".container .popUp form button");
getGiftBtn.addEventListener("click", e => {
    e.preventDefault();
})
// the variable that shows a number of times of typing wrong code
var counterWrongCode = 0;
// code for a hint button
var hintBtn = document.querySelector(".container .popUp .hint");
hintBtn.addEventListener("click", () => {
    showMessageBox("You have a problem with promo code?<br>Check corners &#128521;", "#f3eb1a", "black");
})
function ShowHint() {
    var hintBtn = document.querySelector(".container .popUp .hint");
    hintBtn.style.opacity = 1;
    hintBtn.style.pointerEvents = "all";
}
function HideHint() {
    var hintBtn = document.querySelector(".container .popUp .hint");
    hintBtn.style.opacity = 0;
    hintBtn.style.pointerEvents = "none";
}
// function that returns code depending on drink name
function getCode(drink_name)
{
    var code = 0;
    if(drink_name == "Coca Cola" || drink_name == "Select drink:")
    {
        code = 3678;
    }
    if(drink_name == "Fanta")
    {
        code = 8963;
    }
    if(drink_name == "Sprite")
    {
        code = 5412;
    }
    if(drink_name == "Schweppes")
    {
        code = 1873;
    }
    if(drink_name == "Fuze Tea")
    {
        code = 6435;
    }
    return code;
}
// function that checks if both code and email are valid and right
function Check()
{
    var code = document.forms["formForGift"]["code"].value;
    var email = document.forms["formForGift"]["email"].value;
    var select_text = document.querySelector("main .con .select .selected .text");
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var real_code = getCode(select_text.innerHTML);
    if(isEmpty(code, email) == 0)
    {
        if(!isNaN(code))
        {
            deactivateCodeInput();
            if(email.match(regexMail) != null)
            {
                deactivateEmailInput();
                code = parseInt(code);
                if(code == real_code)
                {
                    deactivateCodeInput();
                    HideHint();
                    SendEmail(email);
                }
                else
                {
                    activateCodeInput();
                    counterWrongCode++;
                    if(counterWrongCode > 1)
                    {
                        ShowHint();
                    }
                    showMessageBox("Wrong code! &#128533;<br>Try again! &#128522;");
                }
            }
            else
            {
                activateEmailInput();
                showMessageBox("Are you sure you typed a valid email address?<br>Please, check it one more time.");
            }
        }
        else
        {
            activateCodeInput();
            counterWrongCode++;
            if(counterWrongCode > 1)
            {
                ShowHint();
            }
            showMessageBox("The promo code must be a number with 4 digits!");
        }
    }
    else
        showMessageBox("All fields must be filled out!");
}
// function for sending email
function SendEmail(email)
{
    var bodyMail = '<div style="width: 100%; height: auto; margin: 10vh auto; display: flex; '
    bodyMail += 'justify-content: center; align-items: center; background-color: white;">'
    bodyMail += '<div style="background-color: rgb(38, 38, 38); max-width: 500px;'
    bodyMail += ' margin: auto 50px; height: auto; color: white; border-radius: 20px;'
    bodyMail += ' font-family: Arial, Helvetica, sans-serif;"><h1 style="width: 100%; color: white; text-align: center;">Gift</h1>'
    bodyMail += '<h3 style="padding-left: 20px; color: white;">This is your gift:</h3>'
    bodyMail += '<img src="' + GiveLinkForMailImage() + '" alt="Drink and Gift" style="width: 100%; height: auto;">'
    bodyMail += '<h3 style="padding-left: 20px; color: white;">I showed what you get &#128516;</h3></div></div>';
    var finalMessage = 'The email sent successfully! &#9989;'
    finalMessage += '<br> Check your inbox &#128515;'
    Email.send({
        Host : "smtp.gmail.com",
        Username : "teamcocacolaclone@gmail.com",
        Password : "rhxghkjtxzwxzrsc",
        To : email,
        From : "teamcocacolaclone@gmail.com",
        Subject : "Gift",
        Body : bodyMail 
    }).then( () => {
        showMessageBox(finalMessage, "darkblue");
        setTimeout( () => {
            var con = document.querySelector(".full");
            con.style.opacity = 0;
            con.style.pointerEvents = "none";
            con.style.animationName = "none";
            Hide();
        }, 5000)
    });
}
// this function returns a link of image from Google Drive
function GiveLinkForMailImage()
{
    var link = "";
    var text = document.querySelector("main .con .select .selected .text").innerHTML;
    if(text == "Coca Cola" || text == "Select drink:") {
        link = "https://drive.google.com/uc?id=1GT3CXOaj-MLH6CLx0glBzSbn3K2dP0j9";
    }
    if(text == "Fanta") {
        link = "https://drive.google.com/uc?id=1V0uSjSL213Q4qCz3Je8VMjfAZ7OCjfl1";
    }
    if(text == "Sprite") {
        link = "https://drive.google.com/uc?id=1C_0kRubxoFjlyPpqqtmUAxy5m4uTV380";
    }
    if(text == "Schweppes") {
        link = "https://drive.google.com/uc?id=1TsfqEabVD2N7eQNyJ7rLzX62Nh4r293F";
    }
    if(text == "Fuze Tea") {
        link = "https://drive.google.com/uc?id=1OP3S2MYjOPjLfWc9XtPiORLwCUC1GzQw";
    }
    return link;
}