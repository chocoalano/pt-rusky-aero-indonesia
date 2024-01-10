import { test } from '@japa/runner'
import Buku from 'App/Models/Buku'

export default function show() {
  test('get a show detail of buku', async ({ client }) => {
    const q = await Buku.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.get(`/buku/${q!.id}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
