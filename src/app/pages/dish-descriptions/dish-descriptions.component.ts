import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-dish-descriptions',
  templateUrl: './dish-descriptions.component.html',
  styleUrls: ['./dish-descriptions.component.css']
})
export class DishDescriptionsComponent implements OnInit,OnChanges {
  amount: any;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    this.cartCount =0;
    this.cartPrice = 0;
  }
  
  ismodel:boolean;
  @Input() dishItem: any;
  cartCount = 0;
  cartPrice = 0;
     constructor() { }
    

  payment(){
    this.ismodel=true;
    this.amount = this.cartPrice;
    console.log("A", this.amount);

  }
  evfuntion(model){
    this.ismodel=model;
  }
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
