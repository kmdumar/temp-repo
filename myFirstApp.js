// const amt = 5;
// if(amt<10){
//     console.log('smaller value');
// }
// else{
//     console.log('larger value');
// }
// console.log(`Hello there! this is my first node app`);

//GLOBALS - NO WINDOW 
//__dirname - path to current directory 
//__filename - file name
// require - function to use modules(commonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

// console.log(__filename);

// setInterval(()=>{
//     console.log('umar khan');
// }, 2000)

// In node every file is module by default 
// Modules - encapsulated code(only share min)

const a='umar'
const b='bilal'
const c='john'

const sayhi=(name)=>{
    console.log(`hello there ${name}`)
}

sayhi(a);
sayhi(b);
sayhi(c);