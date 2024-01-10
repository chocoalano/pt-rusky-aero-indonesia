import Pengarang from "App/Models/Pengarang";
import BaseRepository from "../../BaseRepository";

export default class RepoModels extends BaseRepository {
    constructor() {
        super(Pengarang);
    }
}