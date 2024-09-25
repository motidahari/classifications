import { ApiGatewayServiceHandler } from './apigw.service.handler';
import { v4 as guid } from 'uuid';
import { AppConfig } from '../config/config';
import express, { Express } from 'express';

export class ServiceHandler {
  private apiGatewayHandler: ApiGatewayServiceHandler;
  private requestId: string = guid();
  private config: AppConfig = new AppConfig();
  private app: Express = express();

  enableApiGatewayHandler(): ApiGatewayServiceHandler {
    this.apiGatewayHandler = new ApiGatewayServiceHandler(this.app);
    return this.apiGatewayHandler;
  }

  handler = (): Promise<{ requestId: string }> => {
    const runServer = async (): Promise<{ requestId: string }> => {
      this.requestId = guid();
      await this.listen(this.app);
      console.log('Server running with:', { requestId: this.requestId });
      return { requestId: this.requestId };
    };
    return runServer();
  };

  private async listen(app: Express) {
    return app.listen(this.config.port, this.config.host, async () => {
      return console.log(`Express listening at http://${this.config.host}:${this.config.port}`);
    });
  }
}
