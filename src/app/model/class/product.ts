export class DtProduct {
    productName: string;
    dt_Product: Product[] = []

    //imagePathMedium:string;
    constructor() {
        this.productName = '';
    }
}

export class Product {
    ID: number;
    ProductName: string;
    ProductCode: null;
    Description: string;
    DescriptionShort: null;
    DescriptionMedium: null;
    DescriptionDetail: null|string;
    ImagePathSmall: string;
    ImagePathMedium: string;
    ImagePathLarge: string;
    Price: number;
    HSNCode: string;
    CGST: null;
    SGST: null;
    TaxGST: number;
    MinQty: number;
    MaxQty: number;
    AlertQty: number;
    Weight: string;
    WeightUnit: string;
    Category: string;
    ProductSortID: number;
    AddToCart: number;
    AvilableQty: number;
    ProductionCount: number;
    PurchaseAlertCount: number;
    ProductEnabledFor: string;
    CreatedStaffID: null;
    CreatedDateTime: null;
    UpdatedStaffID: number;
    UpdatedDateTime: Date;
    IsRowDeleted: string;
    constructor() {
        this.ID = 0;
        this.ProductName = '';
        this.ProductCode = null;
        this.Description = '';
        this.DescriptionShort = null;
        this.DescriptionMedium = null;
        this.DescriptionDetail = '';
        this.ImagePathSmall = '';
        this.ImagePathMedium = '';
        this.ImagePathLarge = '';
        this.Price = 0;
        this.HSNCode = '';
        this.CGST = null;
        this.SGST = null;
        this.TaxGST = 0;
        this.MinQty = 0;
        this.MaxQty = 0;
        this.AlertQty = 0;
        this.Weight = '';
        this.WeightUnit = '';
        this.Category = '';
        this.ProductSortID = 0;
        this.AddToCart = 0;
        this.AddToCart = 0;
        this.AvilableQty = 0;
        this.ProductionCount = 0;
        this.PurchaseAlertCount = 0;
        this.ProductEnabledFor = '';
        this.CreatedStaffID = null;
        this.CreatedDateTime = null;
        this.UpdatedStaffID = 0;
        this.UpdatedDateTime = new Date();
        this.IsRowDeleted = '';
    }

}
