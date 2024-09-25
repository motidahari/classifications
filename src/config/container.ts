import { Csv } from '../domain-model/csv';
import { AppConfig } from './config';
import express from 'express';
import cors from 'cors';
import { ExpensesService } from '../service/expenses.service';
import { ClassificationService } from '../service/classification.service';

const app = express();

export class AppContainer {
  readonly csv: Csv;
  readonly config: AppConfig;
  readonly expensesService: ExpensesService;
  readonly classificationService: ClassificationService;

  constructor(config: AppConfig) {
    this.config = config;
    this.csv = new Csv(config.dataPath);
    this.expensesService = new ExpensesService(this.csv);
    this.classificationService = new ClassificationService();
  }
}
