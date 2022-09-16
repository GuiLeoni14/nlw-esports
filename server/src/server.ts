import express from 'express'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToStringHourString } from './utils/convert-minutes-to-hour-string'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({}))
const prisma = new PrismaClient({
  log: ['query'],
})

app.get('/games', async (request, response) => {
  const game = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  })
  return response.json(game)
})

app.get('/ads', (request, response) => {
  return response.json([])
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const body = request.body
  const add = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  })
  return response.status(201).json(add)
})

app.get('/games/:id/ads/', async (request, response) => {
  const gameId = request.params.id
  const ads = await prisma.ad.findMany({
    // quais campos eu quero
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      gameId,
    },
  })
  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        hourEnd: convertMinutesToStringHourString(ad.hourEnd),
        hourStart: convertMinutesToStringHourString(ad.hourStart),
        weekDays: ad.weekDays.split(','),
      }
    }),
  )
})

app.get('/ads/:id/discord', async (request, response) => {
  const addID = request.params.id
  const add = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: addID,
    },
  })
  return response.json({
    discord: add.discord,
  })
})

app.listen(3333)
