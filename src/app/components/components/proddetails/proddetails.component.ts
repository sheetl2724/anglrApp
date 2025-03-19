import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/class/product';
import { User } from '../../../model/class/user';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { APIResponseModel } from '../../../model/interface/productInterface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-proddetails',
  imports: [RouterLink, RouterLinkActive,ButtonModule],
  templateUrl: './proddetails.component.html',
  styleUrl: './proddetails.component.scss',
})
export class ProddetailsComponent implements OnInit {
  message = '';
  productObj: Product = new Product();
  userObj: User = new User();
  productList: Product[] = [];
  size1: string = '';
  color1: string = '';
  //visibleDialog:boolean=false;
  //hovered:boolean=false;
  productService = inject(ProductService);
  prodDesc: string = '';
  result: Product | undefined = new Product();
  isShowDiv: boolean = false;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sharedService.currentMessage.subscribe((msg) => (this.message = msg));
    this.loadProducts(this.userObj);
    this.route.queryParamMap.subscribe((paramMap) => {
      // read param from paramMap
      //debugger
      const paramValue: string | null = paramMap.get('ID');
      console.log(paramValue);
      // use parameter...
      this.ID = paramValue;
      if (this.ID != null) {
        this.prodId = parseInt(paramValue as string);
      }
    });
  }

  sayHello() {
    console.log('Hello from Child Component!');
  }

  productName: string | null = '';
  ID: string | null = '';
  prodId: number = 0;

  loadProducts(userObj: User) {
    this.productService
      .get_ProductList(this.userObj)
      .subscribe((res: APIResponseModel) => {
        this.productList = res.dt_Product;
        if (res.dt_Product) {
          //alert("Product list created success");
          console.log(res);
          this.result = this.productList.find((obj) => obj.ID === this.prodId);
          this.productObj.ProductName = this.result?.ProductName as string;
          this.productObj.Price = this.result?.Price as number;

          this.productObj.ImagePathLarge = this.result?.ImagePathLarge as string;
          
          
            if(this.result?.Category != null ){
              this.productObj.Category=this.result?.Category as string
            }
            this.productObj.Weight=this.result?.Weight as string
            this.productObj.WeightUnit=this.result?.WeightUnit as string

          if (
            this.result?.DescriptionDetail != null ||
            this.result?.Description != null
          ) {
            this.productObj.DescriptionDetail = this.result
              ?.DescriptionDetail as string;
            this.productObj.Description = this.result?.Description as string;
          } else {
            this.productObj.DescriptionDetail = '';
            this.productObj.Description = '';
          }
          console.log(this.result);
        } else {
          alert(res.message);
        }
      });
  }
}
