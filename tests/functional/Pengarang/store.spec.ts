import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'

export function store() {
  test('post a store of pengarang', async ({ client }) => {
    const res = await client.post(`/pengarang`)
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
export function storeValidate() {
  test('post validation a store of pengarang', async ({ client }) => {
    const res = await client.post(`/pengarang`)
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
