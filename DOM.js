//Root Nodes :

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

//Childrens   :

// console.log(document.head.children);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// for (Node of document.body.children) {
//     console.log(Node)
// }
// const childrenOfBody = Array.from(document.body.children);
// console.log(childrenOfBody);

//Siblings  :

// for (var i = 0; i <= 10; i++) {
//     console.log(document.body.children[i]);
// }
// console.log(document.body.children[1]);
// const ulTag = document.body.children[0];
// console.log(ulTag.nextElementSibling);
// const firstList = ulTag.children[0];
// console.log(firstList.textContent);
// const secondList = ulTag.children[1];
// console.log(secondList.textContent);
// console.log(secondList.previousElementSibling.textContent);
// console.log(secondList.nextElementSibling.textContent);

//Table DOM Manuplation  :

// const tableTag = document.body.children[1];
// console.log(tableTag)
// console.log(tableTag.tBodies[0].rows[0].cells[0].style = "background-color:red;");
// console.log(tableTag.tBodies[1].rows[0].cells[0].style = "background-color:darkslategray;");
// console.log(tableTag.tBodies[1].rows[0].cells[1].style = "background-color:chocolate;");
// console.log(tableTag.tBodies[1].rows[0].cells[2].style = "background-color:springgreen;");
// console.log(tableTag.tBodies[1].rows[0].cells[3].style = "background-color:darkorange;");
// console.log(tableTag.tBodies[1].rows[1].cells[0].style = "background-color:violet;");
// console.log(tableTag.tBodies[1].rows[1].cells[1].style = "background-color:hotpink;");
// console.log(tableTag.tBodies[1].rows[1].cells[2].style = "background-color:hotpink;");
// console.log(tableTag.tBodies[1].rows[1].cells[3].style = "background-color:lightcoral;");
// console.log(tableTag.tBodies[1].rows[2].cells[1].style = "background-color:khaki;");
// console.log(tableTag.tBodies[1].rows[2].cells[2].style = "background-color:yellow;");
// console.log(tableTag.tBodies[1].rows[2].cells[0].style = "background-color:blue;");
// console.log(tableTag.tBodies[1].rows[2].cells[3].style = "background-color:aqua;");
// console.log(tableTag.tBodies[1].rows[3].cells[0].style = "background-color:blueviolet;");
// console.log(tableTag.tBodies[1].rows[3].cells[1].style = "background-color:palegreen;");
// console.log(tableTag.tBodies[1].rows[3].cells[2].style = "background-color:darkolivegreen;");
// console.log(tableTag.tBodies[1].rows[3].cells[3].style = "background-color:purple;");
// console.log(tableTag.rows);

// ID / Class / TagName through Access :

// const center = document.getElementById("span") //---->> Access the ID selector using getElementById();
// center.style.textAlign = "center";
// const bgc = document.getElementById("R1");
// bgc.style.backgroundColor = "yellow";
// const bgc2 = document.getElementById("R2");
// bgc2.style.backgroundColor = "green";
// bgc2.style.color = "white";
// const bgc3 = document.getElementById("R3");
// bgc3.style.backgroundColor = "blue";
// bgc3.style.color = "white";
// listItem = document.getElementsByClassName("list-item") //-- -- >> Access the class selector using getElementByClassName()
// console.log(listItem);
// ulList = document.getElementsByTagName("ul") // ----->> Access the tag using  getElementsByTagName();
// console.log(ulList);

// //  Query Selector   :

// const listItem = document.querySelector('.list-item');
// console.log(listItem);
// const listItem1 = document.querySelectorAll('.list-item');
// console.log(listItem1);
// const listItem2 = document.querySelectorAll('ul>li:last-child');
// const listItem2 = document.querySelectorAll('ul>li:nth-child(4)');
// console.log(listItem2[0].textContent);
// console.log(R1.getAttribute("data")) //-- -- - >> Access the User defined atrribute using getAttribute();
// console.log(R1.setAttribute('order', 'placed')) //----> add new attribute and value in a Tag using setAttribute();
// console.log(R1.getAttribute("order"));
// console.log(R1.hasAttribute("data")) //----->> check a any attribut present in the Tag using hasAttribute()  present attribute then if{true} else{false}
// console.log(R3.hasAttribute("class"));
// console.log(R1.removeAttribute("data")) //------->> Remove any attribute in the Tag using removeAttribute()
// console.log(R1.removeAttribute("order"));
// console.log(R1.attributes) //-- -- - > viewing all the attributes in the tag using Attributes.

// Creating And Removing Also Updating Node Elements    :

// const newDiv = document.createElement('div'); //-- -- >> create tag using createElement()
// const newText = document.createTextNode('Namaste Bharat'); //-- -- - >> create a text using createTextNode()
// newDiv.appendChild(newText); //-- -- - >> locate the(newText) in under the(newDiv) using appendChild()
// body.append(newDiv); //-- -- > locate the(newDiv) under the bottom side to the(Body) tag
// body.prepend(newDiv); //-- -- -- - >> locate the(newDiv) under top side to the body tage.
// body.before(newDiv); //-- -- -- >> locate the befor body tag.
// body.after(newDiv) ;//-- -- -- - >> locate the after body tag
// firstDiv.replaceWith(newDiv) //---->> replace the (newDiv) to the (firstDiv)
// firstDiv.remove() ;//------->> remove tag or element.
// body.append(newDiv); //-- -- > locate the(newDiv) under the bottom side to the(Body) tag
// newDiv.innerHTML = '<ul> <li>sandesh</li><li>Prathmesh</li><li>mahesh</li></ul>';

//Eventes  :

// function callMe(event) {
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(event.clientY);
//     console.log(event.clientX);

//     alert('Good Morning');
// }
// clickBtn.addEventlistener('click', callMe);
// clickBtn.removeEventlistener('click', callMe());

// // LocalStorage in javascript :

// localStorage.setItem('name', 'sandesh'); // --->> store the data using setItems()
// localStorage; //---->> access the storing data
// localStorage.clear(); // --->> Clear the all data using clear()
// localStorage.getItem('name'); // --->> access the property/categories related data
// localStorage.remove('name');

// JSON  --->> (Javascript Object Notation) This is a open-standard file format. this is used to exchange data.

// obj = { 'name': "sandesh", length: 1 };
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso); // ---->> any variable type identify then useof (typeof)
// console.log(typeof obj); // ---->> any variable type identify then useof (typeof)

// obj = JSON.stringify(jso);
// console.log(obj);

// parsed = JSON.parse(`{"name":"sandesh","length":1}`);
// console.log(parsed);

// Javascript Versions (ECMAScript)
// Tamplate literals - Backtics

// a = 34;
// console.log(`this may ${a+2}`);