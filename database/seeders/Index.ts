import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BukuFactory from 'Database/factories/BukuFactory'
import PenerbitFactory from 'Database/factories/PenerbitFactory'
import PengarangFactory from 'Database/factories/PengarangFactory'
import RakFactory from 'Database/factories/RakFactory'

export default class extends BaseSeeder {
  public async run () {
    await PenerbitFactory
      .createMany(100)
    await PengarangFactory
      .createMany(100)
    await RakFactory
      .createMany(100)
    await BukuFactory
      .createMany(100)
  }
}
