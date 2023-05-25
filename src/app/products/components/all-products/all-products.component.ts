import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products=res
      this.loading=false
      console.log(this.products)
    },error=>{
      console.log(error.message)
    })
  }
  getCategories(){
    this.loading=true
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories=res
      this.loading=false
      console.log(res)
    },error=>{
      console.log(error.message)
    })
  }
  FilterProducts(event:any){
    let value=event.target.value;
    (value=='All')? this.getProducts():this.getproductcategory(value)
  }
  getproductcategory(keyword:string){
    this.loading=true
    this.service.getProductsByCategories(keyword).subscribe((res:any)=>{
      this.products=res
      this.loading=false
    })
  }
  add(event:any){
    console.log(event)
  }
}
