import { Express } from 'express';
import cors from 'cors';

export class ApiGatewayServiceHandler {
  public app: Express;

  constructor(app: Express) {
    this.app = app;
    this.app.use(cors());
  }
}
