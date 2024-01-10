import { test } from '@japa/runner'
import Pengarang from 'App/Models/Pengarang'

export default function show() {
  test('get a show detail of pengarang', async ({ client }) => {
    const q = await Pengarang.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.get(`/pengarang/${q!.id}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
