import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Messages from './Messages'

export default class BukuValidator extends Messages {
  constructor(protected ctx: HttpContextContract) {
    super()
  }
  public schema = schema.create({
    judul: schema.string(),
    thn_terbit: schema.number(),
    qty: schema.number(),
    pengarang_id: schema.number(),
    penerbit_id: schema.number(),
    rak_id: schema.number(),
  })
}
