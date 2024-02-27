const number = (a , b, c) => a+b+c;

const main = number(2,3,4);
console.log(main)

// if i have one perameter then i don't need to use bracets in arrow function.

const nameAge = people => people.age;

const something = {name: 'rafi' , age: 24};
const main2 = nameAge(something);
console.log(main2)


// if i need to write more then one line inside an arrow function then i have to use the second bracket .

const double = (a,b) =>
{
    const add = a+b;
    const minus = b-a;
    const multiply = add * minus;
    return multiply;
}

const main3 = double(7,8);
console.log(main3)


// if we don't need to use any parameters then we can make a function with an empty parameter


const empty = () => Math.PI;

console.log(empty())

// we can use spread in function to get the elements from array 

const numbers = [12,23,54,11.10]
const maxNum = Math.max(...numbers);
console.log(maxNum)

// we use spread to copy

const friends = [12,9,5,11,45];
const bondhu = friends;
const bondhu2 = [...friends];  //copy 
const bondhu3 = [...friends , 999] // copy with extra elements

bondhu.push(21);
console.log(friends)
console.log(bondhu)
console.log(bondhu2)
console.log(bondhu3)

