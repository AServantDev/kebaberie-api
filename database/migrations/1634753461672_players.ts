import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Players extends BaseSchema {
  protected tableName = 'players'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('twitch')
      table.string('twitter')
      table.string('title')
      table.string('smash_main')
      table.string('mh_main')
      table.string('description')
      table.string('avatar')
      table.string('games')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
