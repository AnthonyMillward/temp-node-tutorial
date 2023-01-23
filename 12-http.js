const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log(req)
    res.end('Welcom to our home page')
        return
    }
    if(req.url === '/about'){
    res.end('Here is the about page')
        return
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page yoar are looking for</p>
    <a href="/">back home</a>
    `)

})

server.listen(5000)