var table = document.getElementById('table');

var randomNumber = Math.floor(Math.random() * 10 + 1);
var randomNumber2 = Math.floor(Math.random() * 10 + 1);

document.querySelector('.capchatext').innerHTML = randomNumber + '+' + randomNumber2;

document.querySelector("input[type=submit]").addEventListener("click", capcha);

function capcha() {
    let val = document.getElementById('capcha').value;
    let rezult = randomNumber + randomNumber2;

    if (val == rezult) {
        addEmployee();
    } else {
        false;
    }

}

function addEmployee() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;


    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = name;

    let cell2 = row.insertCell(1);

    cell2.innerHTML = email;

    let cell3 = row.insertCell(2);

    cell3.innerHTML = phone;
}