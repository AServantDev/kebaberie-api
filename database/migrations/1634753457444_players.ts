import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Players extends BaseSchema {
  protected tableName = 'players'

  public async up () {
    this.schema.dropTable(this.tableName)
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
