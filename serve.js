import {fastify } from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify ()
const database = new DatabaseMemory()

server.post('/videos', (request , reply) => {
    const { title, description, duration } = request.body
    database.create({
        title: 'Video 01',
        description: 'esse e o video 01',
        duration: 180,
    })



    return reply.status(201).send()

}) 

server.get('/videos', () =>{
    return 'xd?'
})

server.put('/videos/:id', () =>{
    return 'ai que absurada'
})

server.delete('/videos/:id', () =>{
    return 'meu dedo e de amoeba'
}) 

server.listen({
    port: 3333,
})