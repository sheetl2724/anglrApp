import { CommonModule, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../../../model/class/product';
import { User } from '../../../model/class/user';
import { ProductService } from '../../../services/product.service';
import { APIResponseModel } from '../../../model/interface/productInterface';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProddetailsComponent } from '../proddetails/proddetails.component';
import { ButtonModule } from 'primeng/button';
import { SharedService } from '../../../services/shared.service';
import { MenuModule } from 'primeng/menu';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-prodlist',
  imports: [
    CommonModule,
    FormsModule,
    StyleClassModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    ReactiveFormsModule,
    MenuModule,
    CalendarModule,ProgressSpinnerModule
  ],
  templateUrl: './prodlist.component.html',
  styleUrl: './prodlist.component.scss',
})
export class ProdlistComponent implements OnInit {
  @ViewChild(ProddetailsComponent) proddetails!: ProddetailsComponent;
  color: string = 'blue';
  productObj: Product = new Product();
  userObj: User = new User();
  productList: Product[] = [];
  productService = inject(ProductService);
  result: Product | undefined;
  router = inject(Router);
  isShowDiv: boolean = false;
  date: Date | undefined;
  formGroup: FormGroup;
  items: any[] = new Array();
  fileredProductList: Product[] = [];
  searchText = '';
  loading: boolean = false;
  selectedDate: Date | null = null;
  isVisible: boolean = false;
  isVisible2: boolean = false;
  constructor(private sharedService: SharedService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      date: new FormControl<Date | null>(null),
    });
    this.items = [
      { label: 'ALL BREADS', command: () => this.allBreads() },
      { label: 'VEGAN BREADS', command: () => this.vegBreads() },
      { label: 'SOURDOUGH BREADS', command: () => this.sourdoughBreads() },
      {
        label: 'SOURDOUGH HYBRID BREADS',
        command: () => this.sourdoughHybridBreads(),
      },
      { label: 'YEAST BREADS', command: () => this.yeastBreads() },
      { label: 'EGGLESS BREADS', command: () => this.eggLessBreads() },
      { label: 'TOASTED', command: () => this.toasted() },
    ];
  }

  ngOnInit(): void {
    this.loadProducts(this.userObj, '');
  }

  toggleDiv() {
    this.isVisible = !this.isVisible;
  }
  toggleDiv2() {
    this.isVisible2 = !this.isVisible2;
  }

  onDateSelected(event: Date) {
    console.log('User selected:', event);
    debugger;
    this.loadProdOnDate(this.userObj, new Date('2024-12-31T13:38:08'));
  }
  addToCart() {}//to do
  loadProducts(userObj: User, str: string) {
    this.productService
      .get_ProductList(this.userObj)
      .subscribe((res: APIResponseModel) => {
        this.productList = res.dt_Product;
        if (res.dt_Product) {
          //alert("Product list created success");
          this.productList;
          if (!str) {
            this.fileredProductList = this.productList;
            console.log(this.fileredProductList);
          } else {
            this.fileredProductList = this.productList.filter(
              (product) =>
                product &&
                product.Category &&
                product.Category &&
                product.Category.toLowerCase().includes(str.toLowerCase())
            );
            console.log(this.fileredProductList);
          }

          this.result = this.productList.find((obj) => obj.ID === 2);
          //console.log(this.result)
        } else {
          alert(res.message);
        }
      });
  }
  showDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  showButton: boolean = true;

  onButtonClick() {
    console.log('Button Clicked!');
    this.router.navigateByUrl('login');
  }
  loadProd() {
    this.loadProducts(this.userObj, '');
  }
  allBreads() {
    console.log('All Breads');
    this.loadProducts(this.userObj, 'Breads');
  }

  vegBreads() {
    console.log('Veg Breads');
  }
  sourdoughBreads() {
    console.log('Sourdough breads');
    this.loadProducts(this.userObj, 'Breads, Sourdough');
  }
  sourdoughHybridBreads() {
    console.log('Sourdough Hybrid breads');
  }
  yeastBreads() {
    console.log('Yeast breads');
    this.loadProducts(this.userObj, 'Breads, Yeast Bread');
  }
  eggLessBreads() {
    console.log('eggless breads');
  }
  toasted() {
    console.log('toasted breads');
  }
  getBrownie() {
    console.log('brownie breads');
    this.loadProducts(this.userObj, 'Brownie');
  }
  getCookie() {
    this.loadProducts(this.userObj, 'Cookie');
  }
  getCake() {
    this.loadProducts(this.userObj, 'Cake');
  }
  getPie() {
    this.loadProducts(this.userObj, 'Pie');
  }
  getViennoiserie() {
    this.loadProducts(this.userObj, 'Viennoiserie');
  }
  getSavouries() {
    this.loadProducts(this.userObj, 'Savouries');
  }
  searchProd(searchTxt: string) {
    console.log(searchTxt);

    this.loadOnClickProducts(this.userObj, searchTxt);
  }


  loadOnClickProducts(userObj: User, str: string) {
    this.productService
      .get_ProductList(this.userObj)
      .subscribe((res: APIResponseModel) => {
        if (res.dt_Product) {
          //alert("Product list created success");
          this.productList = res.dt_Product;

          this.fileredProductList = this.productList.filter(
            (product) =>
              product &&
              product.ProductName &&
              product.ProductName.toLowerCase().includes(str.toLowerCase())
          );
          console.log(this.fileredProductList);
          this.result = this.productList.find((obj) => obj.ID === 2);
          //console.log(this.result)
        } else {
          alert(res.message);
        }
      });
  }

  loadProdOnDate(userObj: User, date: Date) {
    debugger;
    this.productService
      .get_ProductList(this.userObj)
      .subscribe((res: APIResponseModel) => {
        if (res.dt_Product) {
          this.productList = res.dt_Product;

          this.fileredProductList = this.productList.filter(
            (product) => product.UpdatedDateTime === date
          );
          console.log(this.fileredProductList);
        } else {
          alert(res.message);
        }
      });
  }
}
