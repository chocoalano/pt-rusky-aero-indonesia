import { test } from '@japa/runner'

export default function list() {
  test('get a paginated list of penerbit', async ({ client }) => {
    const sortBy = 'id'
    const search = ''
    const sortDesc = true
    const page = 1
    const limit = 10
    const res = await client.get(`/penerbit?page=${page}&limit=${limit}&sortDesc=${sortDesc}&sortBy=${sortBy}&search=${search}`)
    res.assertStatus(200)
    var datafetch: any[] = []
    res.body().data.data.forEach((e) => {
      datafetch.push({
        id: e.id,
        company: e.company,
        code: e.code,
        deptname: e.deptname,
        created_at: e.created_at,
        updated_at: e.updated_at,
      })
    });
    res.assertBodyContains({
      status: true,
      data: {
        meta: {
          total: res.body().data.meta.total,
          per_page: res.body().data.meta.per_page,
          current_page: res.body().data.meta.current_page,
          last_page: res.body().data.meta.last_page,
          first_page: res.body().data.meta.first_page,
          first_page_url: res.body().data.meta.first_page_url,
          last_page_url: res.body().data.meta.last_page_url,
          next_page_url: res.body().data.meta.next_page_url,
          previous_page_url: res.body().data.meta.previous_page_url
        },
        data: datafetch
      },
      msg: 'success',
    })
  })
}
