
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


async function drawDom(){
var settings = {
  "url": "http://localhost:7777/api/threads",
  "method": "GET",
  "timeout": 0,
};
var i = 1;
$.ajax(settings).done(function (response) {
  console.log(response);
  for (var p in response) {//遍历json数组时，这么写p为索引，0,1
    //console.log(response[p].id + " " + response[p].user + " " + response[p].thread_title + " " + response[p].icon);
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
    setInnnerIdAndClass(a31_Obj, response[p].id + "i", "threadstitle", "");
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

    //document.body.appendChild(info);

}

});
console.log("01");
return "0000"
}

//function 
// 
//function setCookie(cname, cvalue, exdays)
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
document.getElementById("new_thread").addEventListener('click', newThread);
window.onload=drawDom().then((res)=>{
    $(".threadstitle").click(function (e){ 
        //console.log("02");
        var v_id=e.target.id;  
        console.log(v_id);
        var v_id2 = $(this).attr("id");
        console.log(v_id2);
    });

    $( "#name" ).click(function() {
    alert( "Handler for .click() called." );
    });

    $(function(){
            $(".text-center").append('<div id="f533">123321</div>');
            //console.log($('div').height());//有输出结果 18
            $("#f533").click(function (e){ 
            var v_id=e.target.id;  
            console.log(v_id);

    });
        });    

})




