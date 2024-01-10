import { test } from '@japa/runner'
import Buku from 'App/Models/Buku'

export default function destroy() {
  test('delete a destroy data of buku', async ({ client }) => {
    const q = await Buku.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.delete(`/buku/${q!.id}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
