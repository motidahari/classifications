import { Env } from './env';
import { dirname } from 'path';

export class AppConfig {
  public dataPath: string;
  public outputPath: string = 'output';
  public port: number = 3005;

  constructor() {
    const appDir = dirname(require.main.filename).replace('/dist', '');
    this.dataPath = `${appDir}/data/expenses.csv`;
    this.outputPath = `${appDir}/output`;
  }
}

export const appConfig: AppConfig = new AppConfig();
