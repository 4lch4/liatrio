import { logger } from '@4lch4/logger'
import { Server, APIName, APIPort, APIPrefix, APIVersion } from './lib/index.js'
import { IAPIConfig } from './interfaces/index.js'
import { getRoutes } from './routes/index.js'

const APIConfig: IAPIConfig = {
  name: process.env.API_NAME || APIName,
  port: Number(process.env.API_PORT) || APIPort,
  prefix: process.env.API_PREFIX || APIPrefix,
  version: process.env.API_VERSION || APIVersion
}

async function init() {
  try {
    const server = new Server(APIConfig)

    const routes = await getRoutes(APIConfig)

    return server.addMiddleware().addRoutes(routes).start()
  } catch (error) { throw error }
}

init()
  .then(() => {
    logger.success('[index#init:then]: Server has successfully come online!')
  })
  .catch(err => {
    logger.error('[index#init:catch]: init() failed!')
    logger.error(err)
  })
