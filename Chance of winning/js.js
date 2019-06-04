function myFunction() {

    let input = document.getElementById('number').value;
    let correctNum = 3;

    if (input == correctNum) {
        text = `Correct [${correctNum}], well done !`
    } else {
        text = 'No, guess again !';
    }

    document.getElementById('text').innerHTML = text;

}

console.log(Math.random() * 15);

// 1 is 15 sansu laimet 3 ticketus, 2 is 15 sansu laimet 2 ticketus, 3 is 15 sansu laimet 1 ticketa.
// let oneof15 = 1/15;
// let twoof15 = 2/15;