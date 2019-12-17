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

  search(q){
    this.productService.searchTerm = q;
  }

}
