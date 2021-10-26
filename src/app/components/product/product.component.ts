import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  //encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
  @Input()
public product?: Product;

@Output()
public pushId: EventEmitter<void>;
public onItemAdded!: EventEmitter<void>;
public onItemRemoved!: EventEmitter<void>;

  constructor() { 
    this.pushId = new EventEmitter<void>();
    this.onItemAdded = new EventEmitter<void>();
    this.onItemRemoved = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

}
