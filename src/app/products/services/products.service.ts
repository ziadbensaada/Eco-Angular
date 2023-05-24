import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi+'products')
  }
  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }
  getProductsByCategories(keyword:string){
    return this.http.get(environment.baseApi+'products/category/'+keyword)
  }
}
