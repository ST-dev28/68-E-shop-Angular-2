import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 @Input()
  public products?: Product[];
  public showCart: boolean = false;
  //public selection?: number[];
  //public cartCount?:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  public cartQty(): number {
    let qty = 0;
    this.products?.forEach((item) => {
      qty += item.qty;
    })
    return qty;
  };

  public myCart(): Product[] {
    const basket: Product[] = [];
    this.products?.forEach((item) => {
      if (item.qty > 0) {
        basket.push(item);
      }
    });
    return basket;
  };

  public showORnot() {
    this.showCart = !this.showCart;
  };
}
