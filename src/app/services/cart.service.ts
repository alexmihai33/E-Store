import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {

    //check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: any;

    if(this.cartItems.length>0){

      //find the item in the cart based on id
      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);

      
    //check if we found it
      alreadyExistsInCart = (existingCartItem !=undefined);
    }

    if(alreadyExistsInCart){
      //increment quantity
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    //comute total price/quantity
    this.computeCartTotals();
  }

  computeCartTotals() {
    
    let totalPriceValue: number= 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    //public the new values...all subscribers will receive the new data

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //log cart data for debugging

    this.logCartData(totalPriceValue, totalQuantityValue);

  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity}, unitPrice: ${tempCartItem.unitPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if(theCartItem.quantity === 0){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {
    //get index of an item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    //if found, remove the item from the array at given index
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}
