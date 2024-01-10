import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'

export function store() {
  test('post a store of rak', async ({ client }) => {
    const res = await client.post(`/rak`)
      .form({
        kode: faker.random.numeric(5),
        lokasi: faker.address.streetAddress(),
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
  test('post validation a store of rak', async ({ client }) => {
    const res = await client.post(`/rak`)
      .form({
        kode: '',
        lokasi: '',
      })
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
