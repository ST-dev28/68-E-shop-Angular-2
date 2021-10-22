import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
  @Input()
public product?: Product;

@Output()
public onFavorite: EventEmitter<void>;

  constructor() { 
    this.onFavorite = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

}
