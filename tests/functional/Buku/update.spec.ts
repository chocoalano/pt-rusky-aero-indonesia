import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'
import Buku from 'App/Models/Buku'

export function update() {
  test('put a update of buku', async ({ client }) => {
    const q = await Buku.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/buku/${q!.id}`)
      .form({
        judul: q!.judul,
        thn_terbit: q!.thn_terbit,
        qty: q!.qty,
        pengarang_id: q!.pengarang_id,
        penerbit_id: q!.penerbit_id,
        rak_id: q!.rak_id,
      })
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
export function updateValidate() {
  test('put validation a update of buku', async ({ client }) => {
    const q = await Buku.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/buku/${q!.id}`)
      .form({})
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
