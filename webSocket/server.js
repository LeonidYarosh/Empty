const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3002 })

server.on('connection', ws => {
    ws.onmessage = e => {
        if (e.data === 'exit') {
            ws.close()
        }
        else {
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(e.data)
                }
            })
        }
    }
    ws.send('Добро 123123')
})
