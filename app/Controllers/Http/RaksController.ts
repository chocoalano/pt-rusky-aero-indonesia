import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RepoModels from '../Repositories/RepoModels/Rak/RepoModels';
import { RakValidator, RakValidatorUpdate } from 'App/Validators/RakValidator';

export default class RaksController {
    private repository: any;
    constructor() {
        this.repository = new RepoModels();
    }
    public async index({ response, request }: HttpContextContract) {
        const q = await this.repository.pagination(request.all(), 'nama', 'created_at')
        return response.status(q.statCode).send(q.res)
    }

    public async store({ request, response }: HttpContextContract) {
        const payload = await request.validate(RakValidator)
        const q = await this.repository.store(payload)
        return response.status(q.statCode).send(q.res)
    }

    public async show({ request, response }: HttpContextContract) {
        try {
            const q = await this.repository.find(request.param('id'));
            return response.send({ status: q.res.status, data: q.res.data, msg: q.res.msg })
        } catch (error) {
            return response.send({ status: false, data: error.messages, msg: 'show error' })
        }
    }

    public async update({ request, response }: HttpContextContract) {
        try {
            const payload = await request.validate(RakValidatorUpdate)
            await this.repository.update(request.param('id'), payload);
            return response.send({ status: true, data: payload, msg: 'update success' })
        } catch (error) {
            return response.abort({ status: false, data: error.messages, msg: 'update error' })
        }
    }

    public async destroy({ request, response }: HttpContextContract) {
        const q = await this.repository.delete(request.param('id'))
        return response.status(q.statCode).send(q.res)
    }
}
