import { TimeUtil } from '../core/time.util';
import { Csv } from '../domain-model/csv';
import * as fs from 'fs';

export class ExpensesService {
  private csv: Csv;

  constructor(csv: Csv) {
    this.csv = csv;
  }

  public getExpenses() {
    console.log('this.csv.listExpenses', this.csv.listExpenses);

    return {};
  }
}
