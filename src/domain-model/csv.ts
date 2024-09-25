import * as fs from 'fs';
import csv from 'csv-parser';
import { ClientAttendance } from './client.attendance';
import { Client } from './client';
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
            rows.push(row);
            this.processRow(row);
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
    console.log('row', row);
    // const expense = new Expense();

    // const values = Object.values(row);
    // const date: string = values[0] as string;
    // const day: string = values[1] as string;
    // const hour: string = values[2] as string;
    // const classType: string = values[3] as string;
    // const room: string = values[4] as string;
    // const category: string = values[5] as string;
    // const coach: string = values[6] as string;
    // const user: string = values[7] as string;
    // const name: string = values[8] as string;
    // const age: string = values[9] as string;
    // const phoneNumber: string = values[10] as string;
    // const membership: string = values[11] as string;
    // const endDate: string = values[12] as string;
    // const numberOfPerforations: string = values[13] as string;
    // const debt: string = values[14] as string;
    // const injury: string = values[15] as string;
    // const check: string = values[16] as string;
    // const classBranch: string = values[17] as string;
    // const userBranch: string = values[18] as string;
    // const email: string = values[19] as string;

    // this.addExpenses(expense);
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
