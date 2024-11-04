import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{


  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number=  8;
  theTotalElements: number = 0;

  previousKeyword: string = "";
  


  constructor(private productService:ProductService,
              private cartService: CartService,
              private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    
  }


  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    
    if(this.searchMode){
      this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }
    
  }

  handleSearchProducts() {
    
    const theKeyword: any = this.route.snapshot.paramMap.get('keyword')!;

    //if we have different keyword than previous
    //set thePageNumber to 1

    if(this.previousKeyword != theKeyword){
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    this.productService.searchProductsPaginate(this.thePageNumber -1,
                                               this.thePageSize,
                                               theKeyword).subscribe(this.processResult());
  }

  handleListProducts() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){

      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = 1;
    }


    //Check if we have a different category than previous
    if(this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);


    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentCategoryId)
                                               .subscribe(this.processResult()
                                               );
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }

  processResult(){
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    }
  }

  //Coresi, turnului 5

}
