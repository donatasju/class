function myFunction() {
    let div = document.querySelector('.wrapper')
    let append = document.createElement("div");
    append.classList.add('append');
    div.append(append);

    let input = document.getElementsByName('input')[0].value;

    switch (input) {
        case 'Avinas':
            text = 'Ryztingas';
            break;
        case 'Jautis':
            text = 'Malonus';
            break;
        case 'Dvyniai':
            text = 'Permainingas';
            break;
        case 'Vezys':
            text = 'Sumanus';
            break;
        case 'Liutas':
            text = 'Atsargus';
            break;
        case 'Mergele':
            text = 'Grazus';
            break;
        case 'Svarstykles':
            text = 'Emocionalus';
            break;
        case 'Skorpionas':
            text = 'Uzsispyres';
            break;
        case 'Saulys':
            text = 'Demesingas';
            break;
        case 'Oziaragis':
            text = 'Paslaptingas';
            break;
        case 'Vandenis':
            text = 'Paslaptingas';
            break;
        case 'Zuvys':
            text = 'Paslaptingas';
            break;

    }

    let nameh1 = document.createElement("h1");
    append.append(nameh1);
    nameh1.innerHTML = text;

}

document.getElementById("submit").addEventListener("click", myFunction);