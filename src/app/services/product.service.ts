import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { WebService } from './web.service';
import { GroceryItem } from '../Models/grocery-item';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [];


  // FOR UI PURPOSE
  categoryClass: String [] = []; 
  activeClass: String = 'nav-item nav-link active bg-dark';
  notActiveClass: String = 'nav-item nav-link text-secondary';
  //

  selection: number = 0;
  onScreenProducts: GroceryItem[] = [];


  productName: String;
  productId: Number;
  productPrice: Number;
  productPicture: String;
  productCategory: String = "";

  newGroceryItem: Boolean = true;


  constructor(public webService: WebService, public toastrService: ToastrService) { }

  reset(){
    this.productId = null;
    this.productPrice = null;
    this.productName = null;
    this.productPicture = null;
    this.productCategory = "";
  }

  onSelect(n: number){

    //console.log("select: "+n);

    this.onScreenProducts = [];
    var temp = [];
    this.webService.getGroceryItemsByCategory(String(this.categories[n].id)).subscribe(
      data=>{
        const gItems = data.data;
        console.log(data);
        gItems.forEach(e => {
          const t = new GroceryItem();
          t.categoryId = e.categoryId;
          t.id = e.id;
          t.imageUrl = e.imageUrl;
          t.name = e.name;
          t.price = e.price;
          temp.push(t);
        });
        this.onScreenProducts = temp;
        console.log(this.onScreenProducts);
      },
      err=>{
        this.toastrService.warning(err.error.message);
      }
    );

    this.categoryClass[this.selection] = this.notActiveClass;
    this.categoryClass[n] = this.activeClass;
    this.selection = n;
  }


  updateCategories(selectCat: number){
    this.webService.allCategories().subscribe(data=>{
      const cat = data.data;
      this.categories = [];
      this.categoryClass = [];
      cat.forEach(e => {
        const nc = new Category();
        nc.id = e.id;
        nc.name = e.name;
        this.categories.push(nc);
        this.categoryClass.push(this.notActiveClass);
      });

      this.onScreenProducts = [];
      this.onSelect(this.selection);
      console.log(this.categories);
      this.categoryClass[selectCat] = this.activeClass;
    },
    err=>{
      console.log(err);
    });
  }
}
