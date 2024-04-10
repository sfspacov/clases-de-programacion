//  [1, 2, 3, 5, 8]
let lista = [5, 3, 8, 1, 2, 77, 15, 8419, 158, 156, 47, 12, -5, -98];
console.log("Lista original:", lista);

let len = lista.length;
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (lista[j] > lista[j + 1]) {
            // Intercambiar elementos si están en el orden incorrecto
            let temp = lista[j];
            lista[j] = lista[j + 1];
            lista[j + 1] = temp;
        }
    }
}

console.log("Lista ordenada:", lista);