function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  console.log(ca);
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function userInfo(){
  username = getCookie("username");
    window.alert("username is " + username);
    //document.cookie = cname + "=" + cvalue + "; " + expires;
    window.location.replace("http://localhost:7777/api/users/" + username);
}

if (getCookie("username") == ""){
  window.alert("no login user");
  window.location.replace("/html/chat_room/login.html");
} else {
  window.alert(getCookie("username") + " login success");
  username = getCookie("username");
  document.getElementById("name").innerHTML = username;
  }

document.getElementById('name').addEventListener('click', userInfo);


//"http://localhost:7777/api/threads/" + response[p].id)