import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/productInterface';
import { User } from '../model/class/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PopularProducts } from '../model/interface/popularProductsI';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  get_ProductList(obj:User ):Observable<APIResponseModel>{

    return this.http.post<APIResponseModel>(environment.API_URL+"get_ProductList",obj);
  }

  getPopularProd():Observable<PopularProducts>{
    return this.http.get<PopularProducts>("http://localhost:1337/api/popular-products?populate=*");
  }
}
