
// const obj = {
//     username: "vladica",
//     password: "123456",
//     address: {
//         street: "djasldjkasl",
//         number: "dasdsad",
//         city: "Novi Sad"
//     }
// }


// const  { username: novoIme, password, address } = obj
// console.log(novoIme)

// let [ item, item1, item2, item3 ] = [ 1, 2, 3]
// let { nesto } = obj
// console.log(nesto)
// console.log(item, item1, item2, item3)

// const foo1 = ({ item = 55 }) => {
//     console.log(item)
// }

// foo1({ username: "vlada"})

// const niz1 = [1, 2, 5]
// const niz2 = [3, 4 ]

// niz3 = [ 1, 2, ...niz2 ,5]
// console.log(niz3)

// primer 1

const obj1 = {
    a: 1,
    b: 2,
    c: {
        x: 3
    }
}

obj1.a = 3;

console.log(obj1.a) // 3

const obj2 = obj1;

obj2.a = 5;


console.log(obj2) //  5 2
console.log(obj1) //  5 2
const obj3 = Object.assign({}, obj1)
obj3.a = 7
console.log("obj1",obj1)
console.log("obj3",obj3)

const obj4 = { ...obj1}

const obj5 = Object.assign({}, obj1)
obj1.c.x = 9

console.log(obj5)


const niz = [1,2,3,4,5,6]
const a = [...niz]











