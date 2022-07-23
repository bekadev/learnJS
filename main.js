

// Вторник 1 занятие //
// Метод sort()
// const names = ['beka', 'bob', 'alua', 'ayan']

// console.log(names.sort())

// const num = [100, 667, 103, 43, 1]

// return > 0 => перестановка
// return <= 0 => перестановка не будет

/*const compFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 10
    } else {
        return -10
    }
}*/

// console.log(num.sort((a, b) => a - b))


// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: "Alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Helge",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: "alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
// ];

// console.log(students.sort((a, b) => a.scores - b.scores).reverse())
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

// bubble sort

// const num = [100, 667, 103, 43, 1, 32]
//
// for (let j = 0; j < num.length - 1; j++) {
//     let isSorted = true
//     for (let i = 0; i < num.length - 1 - j; i++) {
//         if (num[i] > num[i+1]) {
//             isSorted = false;
//             [num[i+1], num[i]] = [num[i], num[i+1]]
//         }
//     }
//     if(isSorted)break
// }
// console.log(num)


