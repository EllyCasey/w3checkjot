import { generateId } from "../utils/GenerateId.js"

export class Note {

    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.color = data.color
        this.body = data.body
        this.createdAt = data.createdAt //NOTE this will eventually change to a data function I believe
        this.updatedAt = data.updatedAt //NOTE same as above, this should be a date function eventually
    }
}