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
  private _parentCategoryTitle: string;

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
    const parent = classificationMap.find(
      (classification: [number, number, string]) => classification[0] === parentCategoryCode
    );

    this.parentCategoryCode = parent?.length >= 1 ? Number(parent[1]) : 0;
    this.parentCategoryTitle = parent?.length >= 2 ? String(parent[2]) : '';

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
    this._parentCategoryCode = Number(parentCategoryCode);
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

  get parentCategoryTitle(): string {
    return this._parentCategoryTitle;
  }

  set parentCategoryTitle(parentCategoryTitle: string) {
    this._parentCategoryTitle = parentCategoryTitle;
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
      income: this.income,
      parentCategoryTitle: this.parentCategoryTitle
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

const classificationMap = [
  [1300, 0, 'עלות מכירות ושירותים'],
  [1306, 1300, 'שכר עבודה'],
  [1307, 1300, 'נילוות לשכר עבודה'],
  [1310, 1300, 'עבודות חוץ וקבלני משנה'],
  [1320, 1300, 'קניות סחורה בארץ'],
  [1330, 1300, 'קניות חומרי גלם וחומרי בנייה בארץ ובחו"ל'],
  [1340, 1300, 'קניית סחורות בחו"ל'],
  [1390, 1300, 'עלויות אחרות'],
  [3000, 0, 'הוצאות מכירה'],
  [3011, 3000, 'שכר עבודה'],
  [3012, 3000, 'נילוות לשכר עבודה'],
  [3015, 3000, 'הוצאות הובלה ואחסנה'],
  [3055, 3000, 'הוצאות מחקר ופיתוח'],
  [3060, 3000, 'נסיעות'],
  [3066, 3000, 'אחזקת רכב והובלות (ללא דלק)'],
  [3067, 3000, 'הוצאות דלק'],
  [3068, 3000, 'החזר בלו על דלק'],
  [3070, 3000, 'דמי שכירות וניהול נכסים'],
  [3075, 3000, 'מכרזים, ירידים ותערוכות'],
  [3080, 3000, 'פחת'],
  [3085, 3000, 'בגדי עבודה'],
  [3090, 3000, 'חשמל ומים'],
  [3100, 3000, 'עמלות וכרטיסי אשראי'],
  [3120, 3000, 'פרסום וקידום מכירות'],
  [3090, 3000, 'שונות נטו'],
  [3500, 0, 'הוצאות הנהלה וכלליות'],
  [3511, 3500, 'שכר עבודה'],
  [3512, 3500, 'נילוות לשכר עבודה'],
  [3515, 3500, 'ביטוחים'],
  [3520, 3500, 'עבודות חוץ וקבלני משנה'],
  [3535, 3500, 'הוצאות ציוד מתכלה'],
  [3540, 3500, 'שירותים מקצועיים'],
  [3545, 3500, 'הוצאות אריזה'],
  [3550, 3500, 'הוצאות אחזקה ותיקונים'],
  [3555, 3500, 'הוצאות מחקר ופיתוח'],
  [3560, 3500, 'נסיעות'],
  [3566, 3500, 'אחזקת רכב והובלות (ללא דלק)'],
  [3567, 3500, 'הוצאות דלק'],
  [3568, 3500, 'החזר בלו על דלק'],
  [3570, 3500, 'דמי שכירות וניהול נכסים'],
  [3575, 3500, 'מיסים ואגרות'],
  [3580, 3500, 'פחת'],
  [3590, 3500, 'חשמל ומים'],
  [3595, 3500, 'שמירה וניקיון'],
  [3600, 3500, 'השתלמות וספרות מקצועית'],
  [3620, 3500, 'פרסום וקידום מכירות'],
  [3625, 3500, 'כיבודים, מתנות, תרומות, קנסות'],
  [3640, 3500, 'דמי ניהול'],
  [3650, 3500, 'הוצאות דואר ותקשורת'],
  [3660, 3500, 'נסיעות לחו"ל'],
  [3665, 3500, 'הוצאות משפטיות'],
  [3680, 3500, 'משרדיות'],
  [3685, 3500, 'בגדי עבודה'],
  [5000, 0, 'הוצאות מימון'],
  [5010, 5000, 'לתאגידים בנקאיים'],
  [5090, 5000, 'אחרות'],
  [8000, 0, 'רכוש קבוע'],
  [8040, 8000, 'כלי רכב'],
  [8050, 8000, 'מחשבים וציוד עיבוד נתונים'],
  [8060, 8000, 'רהיטים ואביזרים'],
  [8080, 8000, 'מלאי בסיסי'],
  [8090, 8000, 'רכוש קבוע אחר']
];
