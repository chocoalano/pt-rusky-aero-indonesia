import Rak from "App/Models/Rak";
import BaseRepository from "../../BaseRepository";

export default class RepoModels extends BaseRepository {
    constructor() {
        super(Rak);
    }
}