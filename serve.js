import {fastify } from 'fastify'
import {DatabaseMemory} from './database-memory'

const server = fastify ()

server.post('/videos', () => {
    return 'pepega '
})

server.get('/video', () =>{
    return 'xd?'
})

server.put('/videos:id', () =>{
    return 'ai que absurada'
})

server.delete('/videos/:id', () =>{
    return 'meu dedo e de amoeba'
}) 

server.liste({
    port: 3333,
})