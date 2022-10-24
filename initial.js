function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    //console.log(ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function userInfo(username) {
    //username = getCookie("username");
    //window.alert("username is " + username);
    //document.cookie = cname + "=" + cvalue + "; " + expires;
    //window.location.replace("/html/chat_room/user_threads.html");
    //window.location.replace("http://localhost:7777/api/users/" + username);
    var settings = {
        "url": "http://localhost:7777/api/users/" + username,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        document.getElementById("name").innerHTML = response.name;
    });
}

function loginOut() {
    username = getCookie("username");
    clearCookie("username");
    location.reload();
}

function clearCookie(name) {
    setCookie(name, "", -1);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
