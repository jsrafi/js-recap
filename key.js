const details = 
{
 name: 'rafi',
 age : 24,
 profession : 'Web Developer'

}

const keys = Object.keys(details);
const values = Object.values(details);


// pairing method 

const entries = Object.entries(details)
console.log(keys,values,entries)

delete details.name;
console.log(details)

details.name = 'rafi';
console.log(details)


Object.seal(details); // now cant delete or add any parameter but can change the value of any parameter.

details.age = 25;
console.log(details)

Object.freeze(details) //now cant delete or add any key cause its in freeze also cant change any value.

delete details.name;
details.age=27;
console.log(details)




