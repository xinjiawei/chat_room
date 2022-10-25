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

    document.getElementById("name").innerHTML = getUserinfo(username);

}

//todo async : false 用法 
function getUserinfo(username){
    
    var settings = {
        "url": "http://localhost:7777/api/users/" + username,
        "method": "GET",
        "async" : false,
        "timeout": 0,
    };
    var name = "";
    $.ajax(settings).done(function(response) {
        //console.log(response);
        name = response.name;
    });
    return name;
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
    if(exdays == "") {
        expires = null;
    } else {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
    }

    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// eliminate a dom tree
function clearContent(elementID) {
    var div = document.getElementById(elementID);
    while(div.firstChild) {
    div.removeChild(div.firstChild);
}}