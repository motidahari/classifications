import { classificationTemplate } from '../classification/office.classification.template';
import * as fs from 'fs';

export class ClassificationService {
  private classificationTemplate = classificationTemplate;

  constructor() {}

  public async getClassifications() {
    return this.classificationTemplate;
  }
}
