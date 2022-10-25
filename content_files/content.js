//global var
var threadMaster = "";

//post a new reply
function newPost() {

    username = getCookie("username");
    new_editor = document.getElementById("editor").value;
    console.log(username + "," + new_editor);
    if (username == "" || new_editor == "") {
        window.alert("find null");
    } else {
            var settings = {
              "url": "http://localhost:7777/api/threads/" + threadid + "/posts",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Content-Type": "application/json"
              },
              "data": JSON.stringify({
                "user": username,
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

//draw the list dom
async function drawDom(){
var settings = {
  "url": "http://localhost:7777/api/threads/" + threadid,
  "method": "GET",
  "timeout": 0,
};
var i = 1;
$.ajax(settings).done(function (response) {
  console.log(response);
  $("#he").append('<div class="panel panel-default"><div class="panel-body"><h1 class="text-center">' + "FROM: " + response.user + '</h1><div class="topic-body">' +
                    response.icon + " • " +  response.thread_title + '</div></div></div>');
  //traverse json array, p can be 1,2....
  for (var p in response.posts) {
    console.log(p + "," + response.posts[p].user);
    i+=1;
    users=response.posts[p].user;
    names=response.posts[p].user;
    text=response.posts[p].text;
    $("#dv").append('<div id="reply' + i + '" class="media"><div class="infos"><div class="media-heading"><a href="http://localhost:7777/api/users/' + users + '">' + users + '</a></div><div class="reply-content">' + text + '</div></div></div><hr/>');

}

// justify if display the delete post button for the current user based on the returned user value.
threadMaster = response.user;
if(response.user == getCookie("username")){
  console.log("master visit");
  alt.style.display = 'block';
} else {
  //$("#login-button").remove();

}

});
console.log("01");
}

// delete thread
function deleteThread(id){
  if(threadMaster == getCookie("username")) {

  var settings = {
    "url": "http://localhost:7777/api/threads/" + threadid,
    "method": "DELETE",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "user": getCookie("username")
    }),
  };

        $.ajax(settings).done(function(response, status, xhr) {
            console.log(status);
            console.log(xhr.status);
            if (xhr.status == 204) {
                console.log(response);
                window.alert("success");
                window.location.replace("/html/chat_room/thread.html");
            } else {
                console.log(xhr.status);
                window.alert("error: " + JSON.stringify(response));
            }
        });}
}

//backto previous page
function backTo() {
  window.location.replace("/html/chat_room/thread.html");
}

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

document.getElementById("new_post").addEventListener('click', newPost);
document.getElementById("deletethread").addEventListener('click', deleteThread);
document.getElementById("back").addEventListener('click', backTo);
//"http://localhost:7777/api/threads/" + response[p].id)

// just learn and test async, no use
window.onload=drawDom().then((res)=>{

    $( "#name" ).click(function() {
    alert("you are: " + getUserinfo(username));
    });   

    var timer = setInterval(function() {
    clearContent("he");
    clearContent("dv");
    drawDom();
}, 5000)


})