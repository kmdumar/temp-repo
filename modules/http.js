const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/')
    res.end('Welcome to our homepage')
    else if(req.url === '/about')
    res.end('This is our short story')
    else{
        res.end(`<h1>Oops!</h1>
                 <p>We cant seem to find the page that you are currently looking for</p>
                 <a href="/">back home</a>`)
    }

})
server.listen(5000)