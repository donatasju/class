function myFunction() {
    let input = document.getElementById('add').value;

    add(input);
}

function add(input) {
    const container = document.getElementById('container');
    let box = document.getElementsByClassName('box');

    let node = document.createElement("div");
    document.body.appendChild(node);

    let content = document.createTextNode(input);
    container.insertBefore(node, box[0]);

    node.appendChild(content);

    node.classList.add('box2');
}