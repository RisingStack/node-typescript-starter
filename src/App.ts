import * as express from 'express';
import { Application, Express, Request, Response, Router } from 'express';
import Configuration from './Configuration';
import DBHandleDispatcher from './database/DBHandlerDispatcher';

const { port } = Configuration.server;

class App {
  public app: Application;

  constructor() {
    this.app = express() as Application;
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router: Router = express.Router() as Router;
    router.get('/', async (req: Request, res: Response) => {
      const coll = await DBHandleDispatcher.getCollection('users');
      coll.insertOne({ name: 'test' });
      res.json({
        message: 'Hello World!',
      });
    });
    this.app.use('/', router);
  }

  public static async initialize() {
    const app: App = new App();
    app.app.listen(port, (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log(`server is listening on ${port}`);
    });
  }
}

export default App;
