import { Env } from './env';

export class AppConfig {
  public path: string = '../../data/expenses.csv';
  public port: number = 3005;

  constructor() {}
}

export const appConfig: AppConfig = new AppConfig();
