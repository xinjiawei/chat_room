//check if logind
if (getCookie("username") == "") {
    //window.alert("no login user");
    window.location.replace("/html/chat_room/login.html");
} else {
    //window.alert(getCookie("username") + " login success");
    username = getCookie("username");
    changeUser(username);
}

//document.getElementById('name').addEventListener('click', userThread);
document.getElementById("loginout").addEventListener('click', loginOut);