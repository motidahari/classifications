import { dirname } from 'path';

export class AppConfig {
  public dataPath: string;
  public outputPath: string = 'output';
  public port: number = 3005;
  public host: string = 'local.morning.co';
  public openAiKey: string;

  constructor() {
    const appDir = dirname(require.main.filename).replace('/dist', '');
    this.dataPath = `${appDir}/data/expenses.csv`;
    this.outputPath = `${appDir}/output`;
    this.openAiKey = process.env.OPENAI_API_KEY;
  }
}

export const appConfig: AppConfig = new AppConfig();
