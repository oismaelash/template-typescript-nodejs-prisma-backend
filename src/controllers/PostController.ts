const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function getAllPosts (): Promise<Array<any>> {
  const posts = prisma.post.findMany()
  return posts
}
