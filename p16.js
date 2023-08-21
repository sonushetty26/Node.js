//http module

const http = require('http')
let port =  5000 // 4 digits ,


// application/json =>json type of response
//application/plain =>downloadable text file
//text/plain =>text type of response
//test/html => html type of response

const server = http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`<div>
              <h1>WeLCOME TO NODE JS</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero sit repellat animi iure voluptatem ex esse. Recusandae tempore placeat doloribus, tenetur, eaque voluptate magni numquam, consequuntur et quia vitae?</p>
            </div>`)
})

server.listen(port, () => {
    console.log(`server is runining @ http://localhost:${port}`)
});