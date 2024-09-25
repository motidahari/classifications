export interface ExpenseDetails {
  amount: number;
  vat: number;
  totalAmount: number;
  documentNumber: number;
  companyIssuer: string;
  companyIssuerTaxId: string;
  date: string;
  documentType: string;
}