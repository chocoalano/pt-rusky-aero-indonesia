import Rak from 'App/Models/Rak'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Rak, ({ faker }) => {
  return {
    kode: faker.random.numeric(5),
    lokasi: faker.address.streetAddress(),
  }
}).build()
