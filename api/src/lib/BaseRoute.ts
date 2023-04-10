import { logger, Logger } from '@4lch4/logger'
import Router from '@koa/router'
import { IAPIConfig } from '../interfaces/index.js'

/**
 * This class is the base class for all of my Route classes. It provides a
 * common interface for all of them to extend.
 *
 * @class BaseRoute
 */
export class BaseRoute {
  protected logger: Logger = logger
  protected router: Router

  constructor(protected config: IAPIConfig) {
    this.router = new Router({ prefix: config.prefix })
  }

  async build(): Promise<Router> {
    return this.router
  }
}
