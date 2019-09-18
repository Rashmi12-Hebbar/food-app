import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dish-descriptions',
  templateUrl: './dish-descriptions.component.html',
  styleUrls: ['./dish-descriptions.component.css']
})
export class DishDescriptionsComponent implements OnInit,OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.cartCount =0;
    this.cartPrice = 0;
  }
  @Input() dishItem: any;
  cartCount = 0;
  cartPrice = 0;
  constructor() { }

  ngOnInit() {
   
  }
  addToCart() {
    this.cartCount += 1;
    this.calculatePrize()
  }
  removeFromCart() {
    this.cartCount -= 1;
    this.calculatePrize()
  }
  calculatePrize() {
    this.cartPrice = this.cartCount * this.dishItem.price;
  }
}
