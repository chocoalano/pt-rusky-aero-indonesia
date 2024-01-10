import Buku from "App/Models/Buku";
import BaseRepository from "../../BaseRepository";

export default class RepoModels extends BaseRepository {
    constructor() {
        super(Buku);
    }
}