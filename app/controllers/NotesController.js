import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js"

export class NotesController {
    constructor() {
        console.log('Notes Controller is loaded');
        this.drawActiveNote()
    }

    drawActiveNote() {
        const notes = AppState.notes
        let userNotes = '';
        notes.forEach((note) => userNotes += note.notesHTMLTemplate)
        setHTML('userNote', userNotes)
    }
}