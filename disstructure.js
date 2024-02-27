const details = 
{
 name: 'rafi',
 age : 24,
 profession : 'Web Developer'

}

const {name , profession} = details;
console.log(name , profession)

// we can also change the name of the variables

const {name:namki , age:boyosh}= details;
console.log(namki)
console.log(boyosh)

// when ue will use object then the distructure will need to be done by like object and when we are working with array then we need to use it like array

const numb= [12,2,434];
const [a,b,c] = numb;
console.log(c);

const new2 = (a,b) => [a*2,b*2];

const main = new2(2,3);
console.log(main);

const [ab,ba] = new2(2,3);
console.log(ab)
