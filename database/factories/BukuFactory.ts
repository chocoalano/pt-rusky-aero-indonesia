import Buku from 'App/Models/Buku'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Buku, ({ faker }) => {
  return {
    judul: faker.lorem.word(),
    thn_terbit: parseInt(faker.random.numeric(4)),
    qty: parseInt(faker.random.numeric()),
    pengarang_id: 1,
    penerbit_id: 1,
    rak_id: 1,
  }
}).build()
