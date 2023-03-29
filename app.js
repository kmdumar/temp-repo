// const name=require('./names')
// console.log(names);
// const say=require('./utils')
// say('umar');
// say('john');
// say(name.peter);
// const data=require('./alternative');
// console.log(data);
// require('./different')
const a=require('lodash');
const items=[1, [2, [3, [4]]]];
const b=a.flattenDeep(items);
console.log(b);