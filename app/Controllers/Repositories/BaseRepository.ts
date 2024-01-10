import { response, responseErrors } from "../helpers";

export default class BaseRepository {
    private model: any;
    constructor(model: any) {
        this.model = model;
    }

    async pagination($input: { sortBy: any; search: any; sortDesc: any; page: any; limit: any; }, $colSearch: any, $colSort: any) {
        try {
            const { sortBy, search, sortDesc, page, limit } = $input
            const count = await this.model.query().count('* as total').first()

            const q = await this.model.query()
                .where(sortBy !== '' ? sortBy : $colSearch, 'LIKE', '%' + search + '%')
                .orderBy([
                    {
                        column: sortBy !== '' ? sortBy : $colSort,
                        order: sortDesc ? 'desc' : 'asc',
                    }
                ]).paginate(page, limit < 5 ? count.$extras.total : limit)
            return response(200, q)
        } catch (error) {
            return responseErrors(error)
        }
    }

    async all() {
        try {
            const q = this.model.all()
            return response(200, q)
        } catch (error) {
            return responseErrors(error)
        }
    }

    async store(data: any) {
        try {
            const q = new this.model
            q.merge(data)
            await q.save()
            return response(200, q)
        } catch (error) {
            console.log(error);
            return responseErrors(error)
        }
    }

    async find(id: number) {
        try {
            const q = await this.model.find(id)
            if (!q) {
                return { res: { status: false, data: 'undefined data!', msg: 'find error' } }
            }
            return response(200, q)
        } catch (error) {
            return responseErrors(error)
        }
    }

    async update(id: number, data: any) {
        try {
            const q = await this.model.find(id)
            if (!q) {
                return { res: { status: false, data: 'undefined data!', msg: 'update error' } }
            }
            q.merge(data)
            await q.save()
            return response(200, data)
        } catch (error) {
            return responseErrors(error)
        }
    }

    async delete(id: number) {
        try {
            const q = await this.model.find(id);
            if (!q) {
                return { res: { status: false, data: 'undefined data!', msg: 'delete error' } }
            }
            await q.delete();
            return response(200, q)
        } catch (error) {
            return responseErrors(error)
        }
    }
}