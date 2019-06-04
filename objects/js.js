document.getElementById('time').addEventListener('click', timer);

function timer() {
    let time = new Date();
    let diena = time.getDay();
    switch (diena) {
        case 1:
            diena = 'Pirmadienis';
            break;
        case 2:
            diena = 'Antradienis';
            break;
        case 3:
            diena = 'Treciadienis';
            break;
        case 4:
            diena = 'Ketvirtadienis';
            break;
        case 5:
            diena = 'Penktadienis';
            break;
        case 6:
            diena = 'Sestadienis';
            break;
        case 7:
            diena = 'Sekmadienis';
            break;
    }

    let fullYear = time.getFullYear() + '.' + time.getMonth() + '.' + diena;
    document.getElementById("div").innerHTML = fullYear;
}