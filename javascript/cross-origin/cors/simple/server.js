const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        if (request.method === 'GET') {
            response.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
            response.end("{name:'chen',password:'test'}")
        }

        if (request.method === 'POST') {
            response.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
            response.end('true')
        }
    }
    response.end('false')
})

server.listen(4000, () => {
    console.log('the server is running at http://localhost:4000')
})