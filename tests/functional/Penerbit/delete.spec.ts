import { test } from '@japa/runner'
import Penerbit from 'App/Models/Penerbit'

export default function destroy() {
  test('delete a destroy data of penerbit', async ({ client }) => {
    const q = await Penerbit.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.delete(`/penerbit/${q!.id}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
