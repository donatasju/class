function Student(id, fname, lname, age, arr) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.arr = arr;
}

var arr = []
arr.push(new Student(5, 'Donatas', 'Jurkus', 24, ['php, html, css, js']));
arr.push(new Student(4, 'Petras', 'Slekys', 24, ['php, html, css, js']));
arr.push(new Student(3, 'Augustinas', 'Ciuta', 24, ['php, html, css, js']));
console.log(arr);

function bubbleSort(items) {
    var length = items.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j].id > items[j + 1].id) {
                var tmp = items[j].id;
                items[j].id = items[j + 1].id;
                items[j + 1].id = tmp;
            }
        }
    }
}

bubbleSort(arr);

var ul = document.createElement("ul");

arr.forEach(function(ele) {
    let li = document.createElement("li");
    li.innerHTML = ele.id + (" ");
    li.innerHTML += ele.fname;

    ul.appendChild(li);
});

var div = document.getElementById("div");
div.appendChild(ul);