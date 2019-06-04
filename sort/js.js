var fruits = [5, 30, 11, 21, 3000, 999999999, 3000000000, 500000000000];

document.write(fruits.filter(fn2));

function fn2(value) {
    return value > 5000;
}