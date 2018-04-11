import { Application, Express, Request, Response, Router } from 'express';

const expressModule = require('express');

class App {
  public app: Application;

  constructor() {
    this.app = expressModule() as Application;
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router: Router = expressModule.Router();
    router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Hello World!',
      });
    });
    this.app.use('/', router);
  }
}

export default new App().app;
