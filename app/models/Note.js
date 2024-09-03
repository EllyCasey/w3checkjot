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

    get notesListTemplate() {
        return /*html*/ `
        <div class="row justify-content-between">
            <div class="col-4 list-box">
                <p class=" d-flex justify-content-end"># of Jots</p>
                <p>Add a Jot</p>
            <div class="d-flex">
                <label for="ColorInput">Color Picker</label>
                <input type="color" class="form-control form-control-color" id="userColorInput" value="${this.color}"
                title="Choose your note color">
                <label for="note-title"></label>
                <input class="ms-3" type="text" minlength="3" maxlength="15">
                <button>Create <i class="mdi mdi-plus"></i></button>
            </div>

            <div class="row mt-4">
                <div class="col-12 list-box-contents">
                    <div>
                        <div class="d-flex justify-content-between">
                        <h4>${this.title}</h4><span>${this.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}