import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'

export function store() {
  test('post a store of penerbit', async ({ client }) => {
    const res = await client.post(`/penerbit`)
      .form({
        name: faker.internet.userName(),
        alamat: faker.address.streetAddress(),
        telp: faker.random.numeric(12),
      })
    res.assertStatus(200)
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
export function storeValidate() {
  test('post validation a store of penerbit', async ({ client }) => {
    const res = await client.post(`/penerbit`)
      .form({
        name: '',
        alamat: '',
        telp: '',
      })
    res.assertStatus(422)
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
