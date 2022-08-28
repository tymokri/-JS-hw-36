'use strict';

let bodyEl = document.body;
let bodyChildren = bodyEl.childNodes
let ulEl = bodyChildren[1];
let liEls = ulEl.childNodes;

let arrOfItems = [];

for (let el of liEls) {

    if(el.innerHTML !== undefined) {
        arrOfItems.push(el.innerHTML);
    }
}

arrOfItems.forEach((element) => {
    console.log(element);
});
console.log(arrOfItems.length);
console.log(arrOfItems);