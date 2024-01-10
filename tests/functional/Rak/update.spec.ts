import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'
import Rak from 'App/Models/Rak'

export function update() {
  test('put a update of rak', async ({ client }) => {
    const q = await Rak.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/rak/${q!.id}`)
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
export function updateValidate() {
  test('put validation a update of rak', async ({ client }) => {
    const q = await Rak.query().orderBy('id', 'desc').limit(1).first()
    const res = await client.put(`/rak/${q!.id}`)
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
