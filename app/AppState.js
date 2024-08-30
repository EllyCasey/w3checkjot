import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  notes = [
    new Note({
      title: 'Test Note Title',
      color: `#00ffff`,
      body: `This is test text to make sure that there is body that goes into a note when it draws and it shows up in the right place and stuff so wow`,
      createdAt: `test Created At: 10/10/2010 at`,
      updatedAt: `test Updated At: 12/12/2012 at`,
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())