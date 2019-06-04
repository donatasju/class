'use strict';

let div = document.querySelector('.wrapper')


function myFunction() {
    let append = document.createElement("div");
    append.classList.add('append');
    div.append(append);


    let name = document.getElementsByName('name')[0].value;
    let fname = name.split(' ')[0];
    let lname = name.split(' ')[1];
    let nameh1 = document.createElement("h1");
    let nameh2 = document.createElement("h2");
    append.append(nameh1);
    append.append(nameh2);

    nameh1.append(fname);
    nameh2.append(lname);

    let phone = document.getElementsByName('phone')[0].value;
    let filteredPhone = phone.slice(0, 1) + " (" + phone.slice(1, 5) + ") " + phone.slice(4, 9);
    let phoneText = document.createElement("h3");
    append.append(phoneText);
    phoneText.append(filteredPhone);


}
console.log(name);

document.getElementById("submit").addEventListener("click", myFunction);