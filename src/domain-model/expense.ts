import { number } from 'joi';
import { TimeUtil } from '../core/time.util';
import { BusinessType } from '../enum/business.type.enum';
import * as yaml from 'js-yaml';

export class Expense {
  private _id: string;
  private _businessId: string;
  private _documentType: string;
  private _expenseStatus: string;
  private _expenseDate: string;
  private _amountExcludeVat: string;
  private _vat: string;
  private _amount: string;
  private _expenseNumber: string;
  private _currency: string;
  private _currencyRate: string;
  private _paymentType: string;
  private _active: string;
  private _classificationType: string;
  private _classificationIrs: string;
  private _classificationTitle: string;
  private _classificationAccountingKey: string;
  private _classificationAccountingCode: string;
  private _classificationIncome: string;
  private _classificationVat: string;
  private _classificationMixed: string;
  private _businessCategory: string;
  private _businessSubCategory: string;
  private _businessType: BusinessType;

  constructor(
    id: string,
    businessId: string,
    documentType: string,
    expenseStatus: string,
    expenseDate: string,
    amountExcludeVat: string,
    vat: string,
    amount: string,
    expenseNumber: string,
    currency: string,
    currencyRate: string,
    paymentType: string,
    active: string,
    classificationType: string,
    classificationIrs: string,
    classificationTitle: string,
    classificationAccountingKey: string,
    classificationAccountingCode: string,
    classificationIncome: string,
    classificationVat: string,
    classificationMixed: string,
    businessCategory: string,
    businessSubCategory: string,
    businessType: BusinessType
  ) {
    this._id = id;
    this.businessId = businessId;
    this.documentType = documentType;
    this.expenseStatus = expenseStatus;
    this.expenseDate = expenseDate;
    this.amountExcludeVat = amountExcludeVat;
    this.vat = vat;
    this.amount = amount;
    this.expenseNumber = expenseNumber;
    this.currency = currency;
    this.currencyRate = currencyRate;
    this.paymentType = paymentType;
    this.active = active;
    this.classificationType = classificationType;
    this.classificationIrs = classificationIrs;
    this.classificationTitle = classificationTitle;
    this.classificationAccountingKey = classificationAccountingKey;
    this.classificationAccountingCode = classificationAccountingCode;
    this.classificationIncome = classificationIncome;
    this.classificationVat = classificationVat;
    this.classificationMixed = classificationMixed;
    this.businessCategory = businessCategory;
    this.businessSubCategory = businessSubCategory;
    this.businessType = businessType;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get businessId(): string {
    return this._businessId;
  }

  set businessId(businessId: string) {
    this._businessId = businessId;
  }

  get documentType(): string {
    return this._documentType;
  }

  set documentType(documentType: string) {
    this._documentType = documentType;
  }

  get expenseStatus(): string {
    return this._expenseStatus;
  }

  set expenseStatus(expenseStatus: string) {
    this._expenseStatus = expenseStatus;
  }

  get expenseDate(): string {
    return this._expenseDate;
  }

  set expenseDate(expenseDate: string) {
    this._expenseDate = expenseDate;
  }

  get amountExcludeVat(): string {
    return this._amountExcludeVat;
  }

  set amountExcludeVat(amountExcludeVat: string) {
    this._amountExcludeVat = amountExcludeVat;
  }

  get vat(): string {
    return this._vat;
  }

  set vat(vat: string) {
    this._vat = vat;
  }

  get amount(): string {
    return this._amount;
  }

  set amount(amount: string) {
    this._amount = amount;
  }

  get expenseNumber(): string {
    return this._expenseNumber;
  }

  set expenseNumber(expenseNumber: string) {
    this._expenseNumber = expenseNumber;
  }

  get currency(): string {
    return this._currency;
  }

  set currency(currency: string) {
    this._currency = currency;
  }

  get currencyRate(): string {
    return this._currencyRate;
  }

  set currencyRate(currencyRate: string) {
    this._currencyRate = currencyRate;
  }

  get paymentType(): string {
    return this._paymentType;
  }

  set paymentType(paymentType: string) {
    this._paymentType = paymentType;
  }

  get active(): string {
    return this._active;
  }

  set active(active: string) {
    this._active = active;
  }

  get classificationType(): string {
    return this._classificationType;
  }

  set classificationType(classificationType: string) {
    this._classificationType = classificationType;
  }

  get classificationIrs(): string {
    return this._classificationIrs;
  }

  set classificationIrs(classificationIrs: string) {
    this._classificationIrs = classificationIrs;
  }

  get classificationTitle(): string {
    return this._classificationTitle;
  }

  set classificationTitle(classificationTitle: string) {
    this._classificationTitle = classificationTitle;
  }

  get classificationAccountingKey(): string {
    return this._classificationAccountingKey;
  }

  set classificationAccountingKey(classificationAccountingKey: string) {
    this._classificationAccountingKey = classificationAccountingKey;
  }

  get classificationAccountingCode(): string {
    return this._classificationAccountingCode;
  }

  set classificationAccountingCode(classificationAccountingCode: string) {
    this._classificationAccountingCode = classificationAccountingCode;
  }

  get classificationIncome(): string {
    return this._classificationIncome;
  }

  set classificationIncome(classificationIncome: string) {
    this._classificationIncome = classificationIncome;
  }

  get classificationVat(): string {
    return this._classificationVat;
  }

  set classificationVat(classificationVat: string) {
    this._classificationVat = classificationVat;
  }

  get classificationMixed(): string {
    return this._classificationMixed;
  }

  set classificationMixed(classificationMixed: string) {
    this._classificationMixed = classificationMixed;
  }

  get businessSubCategory(): string {
    return this._businessSubCategory;
  }

  set businessCategory(businessCategory: string) {
    this._businessCategory = businessCategory;
  }

  get businessCategory(): string {
    return this._businessCategory;
  }

  set businessSubCategory(businessSubCategory: string) {
    this._businessSubCategory = businessSubCategory;
  }

  get businessType(): BusinessType {
    return this._businessType;
  }

  set businessType(businessType: BusinessType) {
    this._businessType = businessType;
  }

  toJson() {
    return {
      id: this.id,
      businessId: this.businessId,
      documentType: this.documentType,
      expenseStatus: this.expenseStatus,
      expenseDate: this.expenseDate,
      amountExcludeVat: this.amountExcludeVat,
      vat: this.vat,
      amount: this.amount,
      expenseNumber: this.expenseNumber,
      currency: this.currency,
      currencyRate: this.currencyRate,
      paymentType: this.paymentType,
      active: this.active,
      classificationType: this.classificationType,
      classificationIrs: this.classificationIrs,
      classificationTitle: this.classificationTitle,
      classificationAccountingKey: this.classificationAccountingKey,
      classificationAccountingCode: this.classificationAccountingCode,
      classificationIncome: this.classificationIncome,
      classificationVat: this.classificationVat,
      classificationMixed: this.classificationMixed,
      businessCategory: this.businessCategory,
      businessSubCategory: this.businessSubCategory,
      businessType: this.businessType
    };
  }

  toYaml() {
    const yamlObject = {
      id: this.id,
      businessId: this.businessId,
      documentType: this.documentType,
      expenseStatus: this.expenseStatus,
      expenseDate: this.expenseDate,
      amountExcludeVat: this.amountExcludeVat,
      vat: this.vat,
      amount: this.amount,
      expenseNumber: this.expenseNumber,
      currency: this.currency,
      currencyRate: this.currencyRate,
      paymentType: this.paymentType,
      active: this.active,
      classificationType: this.classificationType,
      classificationIrs: this.classificationIrs,
      classificationTitle: this.classificationTitle,
      classificationAccountingKey: this.classificationAccountingKey,
      classificationAccountingCode: this.classificationAccountingCode,
      classificationIncome: this.classificationIncome,
      classificationVat: this.classificationVat,
      classificationMixed: this.classificationMixed,
      businessCategory: this.businessCategory,
      businessSubCategory: this.businessSubCategory,
      businessType: this.businessType
    };
    return yaml.dump(yamlObject);
  }
}
