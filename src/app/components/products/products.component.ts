import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public cartCount?: number=0;
  public selection: number [];
  public id:number;

  constructor() {
    this.id=0,
    this.products = [],
    this.selection = [],

    this.products.push(new Product(++this.id,"Basketball", 20, 0, 'https://www.ermitazas.lt/out/pictures/master/product/1/323016.jpg'));
    this.products.push(new Product(++this.id,"Football", 30, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png'));
    this.products.push(new Product(++this.id,"Tennis ball", 10, 0, 'https://5.imimg.com/data5/GK/IX/FR/SELLER-38606736/tennis-balls-500x500-500x500.jpg'));
    this.products.push(new Product(++this.id,"American football", 15, 0, 'https://meteorsport.eu/eng_pl_AMERICAN-FOOTBALL-WILSON-NFL-LEGEND-WTF1729XB-36901_1.jpg'));
   }

   public pushId(id:number){
    this.selection.push(id)
  }

  ngOnInit(): void {
  }

}
