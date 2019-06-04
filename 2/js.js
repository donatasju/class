function myFunction() {

    let div = document.querySelector('.wrapper')
    let append = document.createElement("div");
    append.classList.add('append');
    div.append(append);

    let temp = document.getElementsByName('input')[0].value;

    if (temp >= 100) {
        text = 'garai';
    } else if (temp > 0) {
        text = 'vanduo';
    } else {
        text = 'ledas';
    }

    let nameh1 = document.createElement("h1");
    append.append(nameh1);
    nameh1.innerHTML = text;
}


document.getElementById("submit").addEventListener("click", myFunction);