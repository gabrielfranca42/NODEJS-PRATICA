import { randomUUID } from "node:crypto" // <--- 1. VOCÊ PRECISA DESSA IMPORTAÇÃO
export class DatabaseMemory{
    #videos = new Map()

    list(){
        return Array.from(this.#videos.values())
    }

    create(video){
        const videoId = randomUUID()
        this.#videos.set(videoId, video)
    }
    
    update(id, video){
        const videoID = randomUUID
        this.#videos.set(id, video)
    }


    delete(id){
        this.#videos.delete(id)
    }
    
}