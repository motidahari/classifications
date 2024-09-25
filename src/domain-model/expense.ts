import { number } from 'joi';
import { ClientAttendance } from './client.attendance';
import { TimeUtil } from '../core/time.util';

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
  private _businessType: string;

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
    businessType: string
  ) {
    this.id = id;
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
    return this.id;
  }

  set id(id: string) {
    this.id = id;
  }

  get businessId(): string {
    return this.businessId;
  }

  set businessId(businessId: string) {
    this.businessId = businessId;
  }

  get documentType(): string {
    return this.documentType;
  }

  set documentType(documentType: string) {
    this.documentType = documentType;
  }

  get expenseStatus(): string {
    return this.expenseStatus;
  }

  set expenseStatus(expenseStatus: string) {
    this.expenseStatus = expenseStatus;
  }

  get expenseDate(): string {
    return this.expenseDate;
  }

  set expenseDate(expenseDate: string) {
    this.expenseDate = expenseDate;
  }

  get amountExcludeVat(): string {
    return this.amountExcludeVat;
  }

  set amountExcludeVat(amountExcludeVat: string) {
    this.amountExcludeVat = amountExcludeVat;
  }

  get vat(): string {
    return this.vat;
  }

  set vat(vat: string) {
    this.vat = vat;
  }

  get amount(): string {
    return this.amount;
  }

  set amount(amount: string) {
    this.amount = amount;
  }

  get expenseNumber(): string {
    return this.expenseNumber;
  }

  set expenseNumber(expenseNumber: string) {
    this.expenseNumber = expenseNumber;
  }

  get currency(): string {
    return this.currency;
  }

  set currency(currency: string) {
    this.currency = currency;
  }

  get currencyRate(): string {
    return this.currencyRate;
  }

  set currencyRate(currencyRate: string) {
    this.currencyRate = currencyRate;
  }

  get paymentType(): string {
    return this.paymentType;
  }

  set paymentType(paymentType: string) {
    this.paymentType = paymentType;
  }

  get active(): string {
    return this.active;
  }

  set active(active: string) {
    this.active = active;
  }

  get classificationType(): string {
    return this.classificationType;
  }

  set classificationType(classificationType: string) {
    this.classificationType = classificationType;
  }

  get classificationIrs(): string {
    return this.classificationIrs;
  }

  set classificationIrs(classificationIrs: string) {
    this.classificationIrs = classificationIrs;
  }

  get classificationTitle(): string {
    return this.classificationTitle;
  }

  set classificationTitle(classificationTitle: string) {
    this.classificationTitle = classificationTitle;
  }

  get classificationAccountingKey(): string {
    return this.classificationAccountingKey;
  }

  set classificationAccountingKey(classificationAccountingKey: string) {
    this.classificationAccountingKey = classificationAccountingKey;
  }

  get classificationAccountingCode(): string {
    return this.classificationAccountingCode;
  }

  set classificationAccountingCode(classificationAccountingCode: string) {
    this.classificationAccountingCode = classificationAccountingCode;
  }

  get classificationIncome(): string {
    return this.classificationIncome;
  }

  set classificationIncome(classificationIncome: string) {
    this.classificationIncome = classificationIncome;
  }

  get classificationVat(): string {
    return this.classificationVat;
  }

  set classificationVat(classificationVat: string) {
    this.classificationVat = classificationVat;
  }

  get classificationMixed(): string {
    return this.classificationMixed;
  }

  set classificationMixed(classificationMixed: string) {
    this.classificationMixed = classificationMixed;
  }

  get businessSubCategory(): string {
    return this.businessSubCategory;
  }

  set businessCategory(businessCategory: string) {
    this.businessCategory = businessCategory;
  }

  get businessCategory(): string {
    return this.businessCategory;
  }

  set businessSubCategory(businessSubCategory: string) {
    this.businessSubCategory = businessSubCategory;
  }

  get businessType(): string {
    return this.businessType;
  }

  set businessType(businessType: string) {
    this.businessType = businessType;
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
}
