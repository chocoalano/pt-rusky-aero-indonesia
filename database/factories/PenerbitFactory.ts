import Penerbit from 'App/Models/Penerbit'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Penerbit, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    alamat: faker.address.streetAddress(),
    telp: faker.random.numeric(12),
  }
}).build()
