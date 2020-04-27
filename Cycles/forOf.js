let arr = [1, 2, '3', 4,{ name: 'Roman'}, 6, , 'Hello'];


for (let arrElement of arr) {
    if (!arrElement) {
        break // Перериває цикл.
    }
    console.log(arrElement);
}
// 1
// 2
// 3
// 4
// { name: 'Roman' }
// 6

for (let element of arr) {
    if (element === 6) {
        continue // Пропускає ітерацію.
    }
    console.log(element);
}
//1
// 2
// 3
// 4
// { name: 'Roman' }
// undefined
// Hello
