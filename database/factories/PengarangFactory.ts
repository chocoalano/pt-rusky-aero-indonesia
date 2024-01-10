import Pengarang from 'App/Models/Pengarang'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Pengarang, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    alamat: faker.address.streetAddress(),
    telp: faker.random.numeric(12),
  }
}).build()
