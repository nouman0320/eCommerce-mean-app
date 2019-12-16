import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { WebService } from './web.service';

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

  constructor(public webService: WebService) { }


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

      this.categoryClass[selectCat] = this.activeClass;
    },
    err=>{
      console.log(err);
    });
  }
}
