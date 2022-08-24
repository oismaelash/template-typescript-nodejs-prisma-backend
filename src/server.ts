import express from 'express'
import * as PostController from '@controllers/PostController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'backend works!' })
})

app.get('/posts', async (request, response) => {
  const posts = await PostController.getAllPosts()
  return response.json(posts)
})

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
