import { afterFetch, BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm';

export default class Player extends BaseModel {

    @column({ isPrimary: true})
    public id: number

    @column()
    public name: string

    @column()
    public twitch: string

    @column()
    public twitter: string

    @column()
    public title: string

    @column()
    public smashMain?: string

    @column()
    public mhMain?: string

    @column()
    public description: string

    @column()
    public avatar?: string

    @column()
    public games: string[]

  
    
}