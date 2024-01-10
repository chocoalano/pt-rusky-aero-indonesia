import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bukus'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('judul').notNullable()
      table.integer('thn_terbit').notNullable()
      table.integer('qty').notNullable()
      table
        .integer('pengarang_id')
        .unsigned()
        .references('pengarangs.id')
        .onDelete('CASCADE')
      table
        .integer('penerbit_id')
        .unsigned()
        .references('penerbits.id')
        .onDelete('CASCADE')
      table
        .integer('rak_id')
        .unsigned()
        .references('raks.id')
        .onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
