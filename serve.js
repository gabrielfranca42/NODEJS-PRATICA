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

server.get('/videos', (request) =>{
    const search = request.query

    console.log(search)

    const videos = database.list()
    return videos
})

server.put('/videos/:id', (request) =>{
    const videoId = request.params.id
    const{title, description, duration} = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration,
    }) 

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) =>{
    const videoID = request.params.id

    database.delete(videoID)
    return reply.status(204).send()
}) 

server.listen({
    port: 3333,
})