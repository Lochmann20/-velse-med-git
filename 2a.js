const afsnit = document.querySelector("p");
console.log(afsnit.textContent);

const h2 = document.querySelector("h2");
h2.textContent = "Hej";
console.log(h2);

const h1 = document.querySelector("h1");
h1.textContent = "Halløjsa";
console.log(h1);

const h3 = document.querySelector("h3");
h3.textContent = "Well Hallo";
console.log(h3);

const h3id = document.querySelector("#h3");
h3id.textContent = "Well Hallo";
console.log(h3id);

const p = document.querySelector("p");
p.textContent = "Wow en dør";
console.log(p);

const text = document.querySelector("#text");
text.innerHTML = "Wow en <b>dør</b>";
console.log(text);

const pic = document.querySelector("img");
pic.setAttribute("src", "IMG_0142.jpg");
pic.setAttribute("alt", "logo");
console.log(pic);

let header = document.querySelector("header");
let overskrift = document.createElement("h1");
let text2 = document.createTextNode("heeeeeeeej");
overskrift.appendChild(text2);
header.appendChild(overskrift);
