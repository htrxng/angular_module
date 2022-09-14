export interface IMedicine {
  medicineId?: string;
  medicineName?: string;
  medicineActiveIngredients?: string;
  medicineImportPrice?: number;
  medicineDiscount?: number;
  medicineWholesaleProfit?: number;
  medicineRetailSaleProfit?: number;
  medicineTax?: number;
  medicineConversionRate?: number;
  medicineManufacture?: string;
  medicineUsage?: string;
  medicineInstruction?: string;
  medicineAgeApproved?: string;
  medicineImage?: string;
  medicineDescription?: string;
  flag?: boolean;
}
