// console.log("hello, hello")
/* 
Group: Natalie, Toon, Bryan, Jesus

 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
//console.log(http)
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
        case "/":
            res.write('<h1 style="text-align: center">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break;
        case "/Toon":
            res.write('<body style= "background-color:cyan"></body>')
            res.write('<h1 style="color:yellow ">Im not Toon!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break;
        case "/Toon2":
            res.write('<body style= "background-color:cyan; text-align: center; font-size: 50px"></body>')
            res.write('<h1 style="color: ">OH NO! Natalie attacked Toon!</h1>');
            res.write('<p>Then we all disappeared...</p>');
            break;
        case "/Toon3":

            res.write('<body style= "background-color:cyan; text-align: center; font-size: 50px"></body>')
            res.write('<h1 style="color: ">Toon Ran AWay!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break;
        default:
            res.statusCode = 404
            res.write('<body style= "background-color:cyan; "></body>')
            res.write('<h1 style="text-align: center">TOON NOT FOUND!</h1>')

    }
    // res.write('<h1 style="color: red">Hello World!</h1>');
    // res.write('<p>I wonder what else we can send...</p>');
    res.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running down the road at http://${hostname}:${port}/`);
});
