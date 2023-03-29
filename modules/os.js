const o=require('os')
console.log(o.userInfo());
console.log(o.uptime())

const fns={
    name:o.type(),
    release:o.release(),
    freemem:o.freemem(),
    totalmem:o.totalmem()
}
console.log(fns);