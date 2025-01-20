console.log("This is a practice script");
console.log(document.body.firstElementChild.children);

let cont = document.body.childNodes[1];

cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "green";

cont.firstElementChild.style.color = "blue";
cont.firstElementChild.style.backgroundColor = "yellow";

