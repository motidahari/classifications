import * as fs from 'fs';
import csv from 'csv-parser';
import { Expense } from './expense';

export class Csv {
  private _path: string;
  private _header: string[];
  private _records: string[] = [];
  private _listExpenses: Expense[] = [];

  constructor(path: string) {
    this.path = path;
    this.processCSV();
  }

  get path(): string {
    return this._path;
  }

  set path(path: string) {
    this._path = path;
  }

  get header(): string[] {
    return this._header;
  }

  set header(header: string[]) {
    this._header = header;
  }

  get records(): string[] {
    return this._records;
  }

  set records(records: string[]) {
    this._records = records;
  }

  get listExpenses(): Expense[] {
    return this._listExpenses;
  }

  set listExpenses(listExpenses: Expense[]) {
    this._listExpenses = listExpenses;
  }

  async processCSV(): Promise<void> {
    try {
      const rows: any[] = [];
      await new Promise<void>((resolve, reject) => {
        fs.createReadStream(this.path)
          .pipe(csv())
          .on('data', (row, index) => {
            if (index === 0) {
              this.header = Object.keys(row);
            }
            this.processRow(row);
            rows.push(row);
          })
          .on('end', () => resolve())
          .on('error', (error) => reject(error));
      });
    } catch (error) {
      console.error('Error processing CSV:', error);
      throw error;
    }
  }

  private processRow(row: any): void {
    this.records.push(row);
    // console.log('row', row);

    const expense = new Expense(
      row['id'],
      row['businessId'],
      row['documentType'],
      row['expenseStatus'],
      row['expenseDate'],
      row['amountExcludeVat'],
      row['vat'],
      row['amount'],
      row['expenseNumber'],
      row['currency'],
      row['currencyRate'],
      row['paymentType'],
      row['active'],
      row['classificationType'],
      row['classificationIrs'],
      row['classificationTitle'],
      row['classificationAccountingKey'],
      row['classificationAccountingCode'],
      row['classificationIncome'],
      row['classificationVat'],
      row['classificationMixed'],
      row['businessCategory'],
      row['businessSubCategory'],
      row['businessType']
    );

    this.addExpenses(expense);
  }

  private addExpenses(expense: Expense) {
    this._listExpenses.push(expense);
  }

  // private setUniqueExpensesList(): ClientAttendance[] {
  //   if (this.records.length === 0) return; // Skip if date parsing fails
  //   const uniqueClientsMap = new Map<string, ClientAttendance>();

  //   this._listExpenses.forEach((attendance) => {
  //     const clientId = `${attendance.email || ''}-${attendance.name || ''}`;

  //     if (!uniqueClientsMap.has(clientId)) {
  //       uniqueClientsMap.set(clientId, attendance);
  //     }
  //   });
  // }

  // printClients() {
  //   console.log(this.clientAttendances);
  // }

  // toJson() {
  //   return {
  //     path: this.path,
  //     header: this.header,
  //     records: this.records,
  //     clientAttendances: this.clientAttendances
  //   };
  // }
}

export const CsvColumns = {
  ['']: ''
};
