function myFunction() {
    input = document.getElementById('input').value;

    calc(input);
}

function calc(input) {
    let node = document.createElement("div");
    document.body.appendChild(node);

    for (let index = 0; index < input; index++) {
        for (let j = 0; j <= index; j++) {
            let content = document.createTextNode('*');
            node.appendChild(content);

        }
        let newBrake = document.createElement("br");
        node.appendChild(newBrake);
    }
}