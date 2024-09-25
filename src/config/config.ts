import { Env } from './env';

export class AppConfig {
  public path: string = '/Users/moti/code/classification/data/expenses.csv';
  public port: number = 3005;

  constructor() {}
}

export const appConfig: AppConfig = new AppConfig();
