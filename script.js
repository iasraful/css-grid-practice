// function any(variable) {
//     console.log(variable)
// }
// function result(name, callback) {
//     callback("Hello " + name);
// }
// result("Kayel", any)

// let printHi = name => "Hi " + name

// console.log(printHi("Kayel"));

// const newArr = ["a", "b", "c", "d", "e"]
// console.log(newArr[2]);

// const a = [
// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10], 
// [11, 12, 13, 14, 15]  //opt 4, 8, 11
// ]
// console.log(a[0][3]);
// console.log(a[1][2]);
// console.log(a[2][0]);

    // Simflied Class: 29 number lecture

// const car = {
//     make: "Made in Japan",
//     model: "Honda Cevic Type-R",
//     isUsed: false,
//     makeNois(){
//         console.log("Vroom");
//     }
// }
// console.log(car);
// car.makeNois()
// const book = {
//     titel: "A Thousend Years",
//     Author: {
//         name: "Asraful Islam",
//         age: 23
//     }
// }
// console.log(book.Author.name);\

const items = [
    {price:123},
    {price:103},
    {price:23},
    {price:43},
    {price:12}
]

const ami = items.reduce((sum, number) =>{
    return sum + number.price           
}, 0)

const fName = "Asraful";
const lName = "Islam";
// console.log(`${fName} ${lName}`);

const date = new Date()
console.log(date);