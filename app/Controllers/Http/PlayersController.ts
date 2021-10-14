import Player from 'App/Models/Player';

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';

export default class PlayersController {
    public async index({response})  {
        const players = await Player.all()
        response.status('200').json({
            players: players
        })
    }

    public async store(ctx: HttpContextContract) {
        const storePlayersSchema = schema.create({
            name: schema.string({}, [rules.required()]),
            twitch: schema.string(),
            twitter: schema.string(),
            title: schema.string({},[rules.required()]),
            smashMain: schema.string(),
            mhMain: schema.string(),
            description: schema.string({}, [rules.required()]),
            hasSmash: schema.boolean([rules.required()]),
            hasMh: schema.boolean([rules.required()]),
            avatar: schema.string()
        })
        const {name, twitch, twitter, title, smashMain, mhMain, description, hasSmash, hasMh,avatar} = await ctx.request.validate({schema: storePlayersSchema})

        const player = await Player.create({
            name,
            twitch,
            twitter,
            title,
            smashMain,
            mhMain,
            description,
            hasSmash,
            hasMh,
            avatar
        })
        return player
    }
}
