import { PrismaClient } from "@prisma/client"

//Type for User
type TUser = {
    name: string,
    email: string,
    posts: TPost[],
}

type TPost = {
    title: string,
    content: string,
    published: boolean,
    author?: TUser
}

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    // Get the request body
    const body = await readBody<TPost>(event)

    // Create a new post
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: body.published,
            author: {
                connectOrCreate: {
                    where: {
                        email: body.author!.email
                    },
                    create: {
                        name: body.author!.name,
                        email: body.author!.email
                    }
                }
            }
        }
    })

    // Return the created post
    return post
})