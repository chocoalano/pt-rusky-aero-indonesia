import { test } from '@japa/runner'
import Rak from 'App/Models/Rak'

export default function show() {
  test('get a show detail of rak', async ({ client }) => {
    const q = await Rak.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.get(`/rak/${q!.id}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
