
function my$(id) {
    return document.getElementById(id);
}
 
// Sets the middle text content of any element
function setInnnerText(element,text) {
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
// sets some inner attributes: id class href
function setInnnerIdAndClass(element,ids,classs,href) {
  //var div = document.createElement('div');
  if(ids!== ""){
    element.id = ids;
  }
  if (classs !== "") {
    element.className = classs;
  }
    if (href !== "") {
    element.href = href;
  }

}


//get the innertext in elements
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}
 
 
// Get the first child of any parent element
function getFirstElementChild(element) {
    if(element.firstElementChild){//true--->support
        return element.firstElementChild;
    }else{
        var node=element.firstChild;//the first node
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
// Gets the last child of any parent element
function getLastElementChild(element) {
    if(element.lastElementChild){//true--->support
        return element.lastElementChild;
    }else{
        var node=element.lastChild;//the first node
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
 
// is any element. Bind to any event, to any element, to the type of event, to the event handler
function addEventListener(element,type,fn) {
    //justify if browers suppost the methods
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
 