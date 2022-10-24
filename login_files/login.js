//login function
function loginS(){
    username = document.getElementById("username").value;
    console.log(username);
    document.cookie="username=" + username;
    window.alert(username + " login success");
    //document.cookie = cname + "=" + cvalue + "; " + expires;
    window.location.replace("/html/chat_room/thread.html");
    }

//check if logined
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

document.getElementById('login').addEventListener('click', loginS);

//document.getElementById("loginout").addEventListener('click', loginout);

// if already login, then redirect
if (getCookie("username") !== ""){
  window.location.replace("/html/chat_room/thread.html");
}