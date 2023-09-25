import fastify from "fastify"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const app = fastify()

app.get('/events', async() => {
    const users = await prisma.events.findMany()
    
    return users

})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running on port 3333')
}
)
