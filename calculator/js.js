function calc() {
    let calc = document.querySelector('input[name="calc"]:checked').value;
    var firstVal = Number(document.getElementById('one').value);
    var secondVal = Number(document.getElementById('two').value);

    if (calc === 'add') {
        return add(firstVal, secondVal)
    } else if (calc === 'substract') {
        return substract(firstVal, secondVal);
    } else if (calc === 'multiply') {
        return multiply(firstVal, secondVal);
    } else if (calc === 'divide') {
        return divide(firstVal, secondVal);
    }
}

function add(firstVal, secondVal) {
    rezult = firstVal + secondVal;
    return document.getElementById('rezult').innerHTML = 'Rezultatas: ' + rezult;
}

function substract(firstVal, secondVal) {
    rezult = firstVal - secondVal;

    console.log(firstVal);
    return document.getElementById('rezult').innerHTML = 'Rezultatas: ' + rezult;
}

function multiply(firstVal, secondVal) {
    rezult = firstVal * secondVal;
    return document.getElementById('rezult').innerHTML = 'Rezultatas: ' + rezult;
}

function divide(firstVal, secondVal) {
    rezult = firstVal / secondVal;
    return document.getElementById('rezult').innerHTML = 'Rezultatas: ' + rezult;
}