const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        if (request.method === 'GET') {
            response.writeHead(200, { 'Access-Control-Allow-Origin': 'http://localhost:3000' })
            response.end("{name:'chen',password:'test'}")
        }

        if (request.method === 'POST') {
            response.writeHead(200, {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': true,
                //  此处设置的cookie还是http://localhost:4000的而非http://localhost:3000，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
                //  但只要http://localhost:4000中写入一次cookie认证，后面的跨域接口都能从http://localhost:4000中获取cookie，从而实现所有的接口都能跨域访问
                'Set-Cookie': 'l=a123456;Path=/;Domain=http://localhost:3000;HttpOnly' // HttpOnly的作用是让js无法读取cookie
            })
            response.end('true')
        }
    }
    response.end('false')
})

server.listen(4000, () => {
    console.log('the server is running at http://localhost:4000')
})