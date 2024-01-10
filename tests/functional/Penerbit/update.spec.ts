import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'
import Penerbit from 'App/Models/Penerbit'

export function update() {
  test('put a update of penerbit', async ({ client }) => {
    const q = await Penerbit.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/penerbit/${q!.id}`)
      .form({
        name: faker.internet.userName(),
        alamat: faker.address.streetAddress(),
        telp: faker.random.numeric(12),
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
  test('put validation a update of penerbit', async ({ client }) => {
    const q = await Penerbit.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/penerbit/${q!.id}`)
      .form({
        name: '',
        alamat: '',
        telp: '',
      })
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
