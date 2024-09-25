import { occupations } from '../occupations/occupations';
import * as fs from 'fs';

export class OccupationService {
  private occupations = occupations;

  constructor() {}

  public async getOccupations() {
    return this.occupations;
  }
}
