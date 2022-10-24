

var threadMaster = "";
function newPost() {

    username = getCookie("username");
    new_editor = document.getElementById("editor").value;
    threadid = 1;
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

async function drawDom(){
  threadid = 1;
var settings = {
  "url": "http://localhost:7777/api/threads/" + threadid,
  "method": "GET",
  "timeout": 0,
};
var i = 1;
$.ajax(settings).done(function (response) {
  console.log(response);
  for (var p in response.posts) {//遍历json数组时，这么写p为索引，0,1
    console.log(p + "," + response.posts[p].user);
    i+=1;
    users=response.posts[p].user;
    names=response.posts[p].user;
    text=response.posts[p].text;
    $("#dv").append('<div id="reply' + i + '" class="media"><div class="infos"><div class="media-heading"><a href="http://localhost:7777/api/users/' + users + '">' + users + '</a></div><div class="reply-content">' + text + '</div></div></div><hr/>');

}

threadMaster = response.user;
if(response.user == getCookie("username")){
  console.log("master visit");
  alt.style.display = 'block';
} else {
  //$("#login-button").remove();

}

});
console.log("01");
return "0000"
}

function deleteThread(id){
  threadid = 1;
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

        });

  }

}

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

document.getElementById("new_post").addEventListener('click', newPost);
document.getElementById("deletethread").addEventListener('click', deleteThread);
//"http://localhost:7777/api/threads/" + response[p].id)


window.onload=drawDom().then((res)=>{
    $(".reply-content").click(function (e){ 
        //console.log("02");
        var v_id=e.target.id;  
        console.log(v_id);
        var v_id2 = $(this).attr("id");
        console.log(v_id2);
    });

    $( "#name" ).click(function() {
    alert( "Handler for .click() called." );
    });   

})