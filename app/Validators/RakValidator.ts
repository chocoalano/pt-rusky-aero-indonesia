import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Messages from './Messages'

export class RakValidator extends Messages {
  constructor(protected ctx: HttpContextContract) {
    super()
  }
  public schema = schema.create({
    kode: schema.string([
      rules.unique({ table: 'raks', column: 'kode' })
    ]),
    lokasi: schema.string(),
  })
}

export class RakValidatorUpdate extends Messages {
  constructor(protected ctx: HttpContextContract) {
    super()
  }
  public refs = schema.refs({
    id: this.ctx.params.id
  })
  public schema = schema.create({
    kode: schema.string([
      rules.unique({ table: 'raks', column: 'kode', whereNot: { id: this.refs.id }, })
    ]),
    lokasi: schema.string(),
  })
}
