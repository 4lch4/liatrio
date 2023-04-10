import { Successful } from '@4lch4/koa-oto'
import { RouterContext } from '@koa/router'
import { BaseRoute } from '../lib/index.js'

export class PrimeRoute extends BaseRoute {
  async getMethod(ctx: RouterContext) {
    Successful.ok(ctx, {
      message: "Automate all the things!",
      timestamp: new Date().getTime()
    })

    this.logger.success(`${ctx.method} ⇥ ${ctx.path} ⇥ (${ctx.status})`)
  }

  override async build() {
    this.router.get('/', ctx => this.getMethod(ctx))

    return this.router
  }
}
