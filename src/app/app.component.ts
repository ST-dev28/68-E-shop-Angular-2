import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online-store';
  //public products: Product[];
  //public productfavorite?: string;

  constructor() {
    //this.products = [];

    //this.products.push(new Product("Basketball", 1, 20, 0, 'https://www.ermitazas.lt/out/pictures/master/product/1/323016.jpg'));
    //this.products.push(new Product("Football", 1, 30, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png'));
    //this.products.push(new Product("Tennis ball", 1, 10, 0, 'https://5.imimg.com/data5/GK/IX/FR/SELLER-38606736/tennis-balls-500x500-500x500.jpg'));
  }
/*
  public favoriteProduct(product: Product): void{
    console.log("Produktas => TOP PREKE!!!", product);

    this.productfavorite = product.name;
  }*/

  ngOnInit(): void {
  }
}
