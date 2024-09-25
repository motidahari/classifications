import { Express } from 'express';
import cors from 'cors';

export class ApiGatewayServiceHandler {
  public app: Express;

  constructor(app: Express) {
    this.app = app;
    this.app.use(cors({
      origin: '*', // Allow all origins
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
      credentials: true // Enable credentials (like cookies) if needed
    }));
  }
}
