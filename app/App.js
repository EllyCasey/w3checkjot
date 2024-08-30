import { NotesController } from './controllers/NotesController.js';
import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  NotesController = new NotesController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
