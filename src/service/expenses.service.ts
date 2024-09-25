import { TimeUtil } from '../core/time.util';
import { Csv } from '../domain-model/csv';
import * as fs from 'fs';

export class ExpensesService {
  private csv: Csv;

  constructor(csv: Csv) {
    this.csv = csv;
  }

  public async getExpenses() {
    await this.csv.processCSV();
    console.log('this.csv.listExpenses', this.csv.listExpenses.length);

    return this.csv.listExpenses;
  }
}
