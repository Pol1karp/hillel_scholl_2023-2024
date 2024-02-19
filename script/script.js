let username = document.querySelector("#nameInput");
let age = document.querySelector("#ageInput");
let cookieTime = document.querySelector("#cookieTimeInput");
let submit = document.querySelector("button");

let loadName = getCookie("username");
let loadAge = getCookie("age");

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

submit.addEventListener("click", function () {
    setCookie("username", username.value, cookieTime.value);
    setCookie("age", age.value, cookieTime.value);
});
if (loadName != null && loadAge != null) {
    document.write(loadName + "<br>");
    document.write(loadAge);
}