//login function, use cookies to save user info
function loginS(){
    username = document.getElementById("username").value;
    console.log(username);
    var settings = {
      "url": "http://localhost:7777/api/users",
      "method": "GET",
      "timeout": 0,
    };

    var isvalid = 0;
    $.ajax(settings).done(function (response) {
      console.log(response);
      for(p in response){
        if(response[p].username == username) {
          isvalid = 1;
          break;
        } else continue;
      }
      if(isvalid){
          document.cookie="username=" + username;
          window.alert(username + " login success");
          //document.cookie = cname + "=" + cvalue + "; " + expires;
          window.location.replace("/html/chat_room/thread.html");
          console.log(isvalid);
      } else {
          window.alert(username + " not valid");
          console.log(isvalid);
      }
    });




    }


document.getElementById('login').addEventListener('click', loginS);

//document.getElementById("loginout").addEventListener('click', loginout);

// if already login, then redirect
if (getCookie("username") !== ""){
  window.location.replace("/html/chat_room/thread.html");
}