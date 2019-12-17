import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  search(){
    //console.log("search called "+this.productService.allProducts.length);
    var search = this.productService.searchTerm;
    this.productService.onScreenProductsFromSearch = [];
    for(var i=0; i<this.productService.allProducts.length;i++){
      //console.log(this.productService.allProducts[i].name);
      if(this.productService.allProducts[i].name.toLowerCase().includes(search.toLowerCase())){
        console.log("Search Term: "+search+" -> Result: "+this.productService.allProducts[i].name);
        this.productService.onScreenProductsFromSearch.push(this.productService.allProducts[i]);
      }
    }

  }

}
