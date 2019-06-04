function myFunction() {
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if (gender == 'male' && age >= 18 && age <= 30) {
        text = 'i kariuomene';
    } else {
        text = 'ne i kariuomene';
    }

    document.getElementById('text').innerHTML = text;
}

// let isLegal = myage >= period ? 'Legal age' : 'Under-age';

// let isWar = gender == 'male' && age >= 18 && age <= 30 ? text = 'i kariuomene' : text = 'ne i kariuomene';