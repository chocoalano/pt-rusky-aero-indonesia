import { test } from '@japa/runner'

export default function list() {
  test('get a paginated list of pengarang', async ({ client }) => {
    const sortBy = 'id'
    const search = ''
    const sortDesc = true
    const page = 1
    const limit = 10
    const res = await client.get(`/pengarang?page=${page}&limit=${limit}&sortDesc=${sortDesc}&sortBy=${sortBy}&search=${search}`)
    res.assertStatus(res.status())
    res.assertBodyContains({
      status: res.body().status,
      data: res.body().data,
      msg: res.body().msg,
    })
  })
}
