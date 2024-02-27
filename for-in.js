// we for of on arrays and values  but we normally cants use it on object so for object we have for in.

const main = {
    name:'rafi',
    age:24,
    profession: 'webdevoloper'
}

for (const bang in main)
{
    const value = main[bang]
    console.log(bang , value)
}
const name = 'Hero'; 
const greetings = `Welcome Home!${name}`;
console.log(greetings)