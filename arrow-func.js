// function declaration
function add (a , b)
{
    const number = a * b;
    return number
}

const main = add(5, 7);
console.log(main)

// function expression
const add2 = function(a , b)
{
    const number = a * b;
    return number
}

const main2 = add2(5, 7);
console.log(main)

// arrow function

const add3 = (a, b) => a*b;

const main3 = add3(5, 7);
console.log(main)

