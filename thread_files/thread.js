function init(){

}

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

function newThread() {

    username = getCookie("username");
    new_title = document.getElementById("title").value;
    new_icon = document.getElementById("icon").value;
    new_editor = document.getElementById("editor").value;
    console.log(username + "," + new_title + "," + new_icon + "," + new_editor);
    if (username == "" || new_title == "" || new_icon == "" || new_editor == "") {
        window.alert("find null");
    } else {
        var settings = {
            "url": "http://localhost:7777/api/threads",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "user": username,
                "thread_title": new_title,
                "icon": new_icon,
                "text": new_editor
            }),
        };

        $.ajax(settings).done(function(response, status, xhr) {
            console.log(status);
            console.log(xhr.status);
            if (xhr.status == 201) {
                console.log(response);
                window.alert("success");
                location.reload();
            } else {
                console.log(xhr.status);
                window.alert("error: " + JSON.stringify(response));
            }

        });

    }
}

//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
if (getCookie("username") == "") {
    window.alert("no login user");
    window.location.replace("/html/chat_room/login.html");
} else {
    window.alert(getCookie("username") + " login success");
    username = getCookie("username");
    userInfo(username);
}

//document.getElementById('name').addEventListener('click', userThread);
document.getElementById("loginout").addEventListener('click', loginOut);
document.getElementById('new_thread').addEventListener('click', newThread);




//window.alert(geThreads()); 
function drawDom() {
var settings = {
  "url": "http://localhost:7777/api/threads",
  "method": "GET",
  "timeout": 0,
};
var i = 1;
$.ajax(settings).done(function (response) {
  console.log(response);
  for (var p in response) {//遍历json数组时，这么写p为索引，0,1
    console.log(response[p].id + " " + response[p].user + " " + response[p].thread_title + " " + response[p].icon);
    //创建元素的
    //   var pObj = document.createElement("p");
    //   setInnnerText(pObj, "这是一个p");
    //   //把创建后的子元素追加到父级元素中
    //   my$("dv").appendChild(pObj);
    i += 1;
    var li1_Obj = document.createElement("li");
    //setInnnerText(pObj, "这是一个p");
    setInnnerIdAndClass(li1_Obj, i + "li", "media", "");
    my$("dv").appendChild(li1_Obj);

    var div1_Obj = document.createElement("div");
    setInnnerIdAndClass(div1_Obj, i + "div1", "media-body", "");
    my$(i + "li").appendChild(div1_Obj);

    var div21_Obj = document.createElement("div");
    setInnnerIdAndClass(div21_Obj, i + "div21", "media-heading", "");
    my$(i + "div1").appendChild(div21_Obj);
    var a31_Obj = document.createElement("a");
    setInnnerText(a31_Obj, response[p].icon + " • " + response[p].thread_title);
    setInnnerIdAndClass(a31_Obj, "", "", "http://localhost:7777/api/threads/" + response[p].id);
    my$(i + "div21").appendChild(a31_Obj);

    var div22_Obj = document.createElement("div");
    setInnnerIdAndClass(div22_Obj, i + "div22", "media-body meta", "");
    my$(i + "div1").appendChild(div22_Obj);
    var a32_Obj = document.createElement("a");
    setInnnerText(a32_Obj, response[p].user);
    setInnnerIdAndClass(a32_Obj, "", "", "http://localhost:7777/api/users/" + response[p].user);
    my$(i + "div22").appendChild(a32_Obj);

    var hrObj = document.createElement("hr");

    my$("dv").appendChild(hrObj);
}
});
}

drawDom();

