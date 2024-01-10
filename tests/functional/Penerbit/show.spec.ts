import { test } from '@japa/runner'
import Penerbit from 'App/Models/Penerbit'

export default function show() {
  test('get a show detail of penerbit', async ({ client }) => {
    const q = await Penerbit.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.get(`/penerbit/${q!.id}`)
    res.assertStatus(200)
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
