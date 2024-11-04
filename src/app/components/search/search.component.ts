import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  productsSearch!: Product[];
  filteredProducts: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private http: ProductService) {}

  ngOnInit() {
    // this.http.getProducts().subscribe(data => {
    //   this.productsSearch = data;
    // })
  }


  doSearch(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }

}
