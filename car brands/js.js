var table = document.getElementById('table');
var i = 1;

function addCar() {
    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let doors = document.getElementById('doors').value;
    let price = document.getElementById('price').value;


    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = i;
    i++;

    let cell2 = row.insertCell(1);

    cell2.innerHTML = brand;

    let cell3 = row.insertCell(2);

    cell3.innerHTML = model;

    let cell4 = row.insertCell(3);

    cell4.innerHTML = doors;

    let cell5 = row.insertCell(4);

    cell5.innerHTML = price;
}

function removeCar() {
    let remove = document.getElementById('delete').value;

    if (remove == 0) {
        false
    } else {
        table.deleteRow(remove);
    }

}