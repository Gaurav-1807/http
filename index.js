const http = require('http');

const server =  http.createServer((req, res) => {

    if(req.url == "/"){
        res.end("<h1>Welcome to home page</h1>");
    }
    if(req.url == "/index"){
        res.end("<h1>Welcome to index page</h1>");
    }
    if(req.url == "/signup"){
        res.end("<h1>Welcome to signup page</h1>");
    }
    if(req.url == "/login"){
        res.end("<h1>Welcome to login page</h1>");
    }
    if(req.url == "/blog"){
        res.end("<h1>Welcome to blog page</h1>");
    }

})
server.listen(8090,()=>{
    console.log("server started successfully")
});