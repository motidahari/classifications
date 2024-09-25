import { number } from 'joi';
import { TimeUtil } from '../core/time.util';
import * as yaml from 'js-yaml';

export class Classification {
  private _accountKey: string;
  private _sortCode?: string;
  private _description: string;
  private _categoryCode: number;
  private _parentCategoryCode?: number;
  private _usageRatio?: number;
  private _vat: number;
  private _income?: number;

  constructor(
    accountKey: string,
    sortCode: string,
    description: string,
    categoryCode: number,
    parentCategoryCode: number,
    usageRatio: number,
    vat: number,
    income: number
  ) {
    this._accountKey = accountKey;
    this.sortCode = sortCode;
    this.description = description;
    this.categoryCode = categoryCode;
    this.parentCategoryCode = parentCategoryCode;
    this.usageRatio = usageRatio;
    this.vat = vat;
    this.income = income;
  }

  get accountKey(): string {
    return this._accountKey;
  }

  set accountKey(accountKey: string) {
    this._accountKey = accountKey;
  }

  get sortCode(): string {
    return this._sortCode;
  }

  set sortCode(sortCode: string) {
    this._sortCode = sortCode;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get categoryCode(): number {
    return this._categoryCode;
  }

  set categoryCode(categoryCode: number) {
    this._categoryCode = categoryCode;
  }

  get parentCategoryCode(): number {
    return this._parentCategoryCode;
  }

  set parentCategoryCode(parentCategoryCode: number) {
    this._parentCategoryCode = parentCategoryCode;
  }

  get usageRatio(): number {
    return this._usageRatio;
  }

  set usageRatio(usageRatio: number) {
    this._usageRatio = usageRatio;
  }

  get vat(): number {
    return this._vat;
  }

  set vat(vat: number) {
    this._vat = vat;
  }

  get income(): number {
    return this._income;
  }

  set income(income: number) {
    this._income = income;
  }

  toJson() {
    return {
      accountKey: this.accountKey,
      sortCode: this.sortCode,
      description: this.description,
      categoryCode: this.categoryCode,
      parentCategoryCode: this.parentCategoryCode,
      usageRatio: this.usageRatio,
      vat: this.vat,
      income: this.income
    };
  }

  toYaml() {
    const yamlObject = {
      accountKey: this.accountKey,
      sortCode: this.sortCode,
      description: this.description,
      categoryCode: this.categoryCode,
      parentCategoryCode: this.parentCategoryCode,
      usageRatio: this.usageRatio,
      vat: this.vat,
      income: this.income
    };
    return yaml.dump(yamlObject);
  }
}
