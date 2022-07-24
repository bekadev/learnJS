let a
const c = 10
a = true
let name = {
    arr: [1,2,3]
}
console.log(name)

const objectA = {
    a: 10,
    b: true
}

const copy = objectA

copy.a = 20

const user = {
    age: 21,
    name: 'bekzat',
    userName: 'bekadev',
    password: 21431
}

const copyUser = {...user}
copyUser.age = 22
console.log(user.age)
console.log(copyUser.age)