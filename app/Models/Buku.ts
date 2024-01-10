import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Buku extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public judul: string
  
  @column()
  public thn_terbit: number
  
  @column()
  public qty: number
  
  @column()
  public pengarang_id: number
  
  @column()
  public penerbit_id: number
  
  @column()
  public rak_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
