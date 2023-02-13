

let child=document.querySelector(".title");
child.parentNode.style.border="1px red solid";
child.parentNode.parentNode.style.background="yellow";
let parent=document.querySelector("#items");
parent.firstElementChild.innerText="Manoj";
parent.previousElementSibling.style.color="red";
let element=document.createElement("h2");
let p=document.querySelector("#main");
element.innerText="HELLOW WORLD!";
p.insertBefore(element,p.children[2]);
let li=document.createElement("li");
li.innerText="HELLO WORLD!";
parent.insertBefore(li,parent.children[0]);
