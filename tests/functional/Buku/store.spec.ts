import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'

export function store() {
  test('post a store of buku', async ({ client }) => {
    const res = await client.post(`/buku`)
      .form({
        judul: faker.lorem.word(),
        thn_terbit: parseInt(faker.random.numeric(4)),
        qty: parseInt(faker.random.numeric()),
        pengarang_id: 1,
        penerbit_id: 1,
        rak_id: 1,
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
  test('post validation a store of buku', async ({ client }) => {
    const res = await client.post(`/buku`)
      .form({})
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
