import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://localhost:8080/api/products';
  private url = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  //method used by multiple methods down below - saves boiling

  getProducts(): Observable<any> {
    return this.httpClient.get<any>(this.url + 'getProducts');
  }

  searchProductsPaginate(thePage: number, 
    thePageSize: number, 
    theKeyword: number): Observable<GetResponseProduct>{
      
  const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                  + `&page=${thePage}&size=${thePageSize}`;

  return this.httpClient.get<GetResponseProduct>(searchUrl);
  } 

  getProduct(theProductId: number): Observable<Product> {

    //build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(thePage: number, 
                        thePageSize: number, 
                        theCategoryId: number): Observable<GetResponseProduct>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProduct>(searchUrl);
  } 


  searchProducts(theKeyword: string): Observable<Product[]> {
    
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts();
  }

  getProductCategories(): Observable<any> {

    return this.httpClient.get<any>(this.url + 'getProductCategory');
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  }
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

