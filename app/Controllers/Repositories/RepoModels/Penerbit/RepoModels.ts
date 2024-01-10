import BaseRepository from "../../BaseRepository";
import Penerbit from "App/Models/Penerbit";

export default class RepoModels extends BaseRepository {
    constructor() {
        super(Penerbit);
    }
}