import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Players extends BaseSchema {
  protected tableName = 'players'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      

      table.dropColumn('has_mash')
      table.boolean('has_smash')

   
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
