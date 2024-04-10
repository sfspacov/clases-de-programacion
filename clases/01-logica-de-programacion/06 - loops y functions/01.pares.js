//[0, 1, 2, 3, 4, ...., 95, 96, 97, 98, 99, 100]
let array = Array.from({ length: 101 }, (_, index) => index);

// index = index + 1 -> index++
for (let index = 0; index < array.length; index = index + 1) {
    console.log(index);
}