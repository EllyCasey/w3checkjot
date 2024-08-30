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

    get notesHTMLTemplate() {
        return /*html*/ `
        <div class="col-7 list-box me-2">
            <h3>${this.title}</h3>
            <p>${this.createdAt}</p>
            <p>${this.updatedAt}</p>
            <label for="userNote"></label>
            <input type="textarea" class="textarea" placeholder="${this.body}">
            <p class="d-flex justify-content-end">0 Words</p>
      </div>
        `
    }
}