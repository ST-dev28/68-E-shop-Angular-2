import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public cartCount?: number = 0;
  public selection: number[];
  public id: number;

  constructor() {
    this.id = 0,
      this.products = [],
      this.selection = [],

      this.products.push(new Product(++this.id, "Blue marshmellow", 4, 1, 'https://www.byrdie.com/thmb/lVfKDQHUDS4Xlxdv0CLs1Eyyo1Y=/800x800/smart/filters:no_upscale()/04031_a-174d61f164f94dca9faeb6ad73b57f24.jpg'));
    this.products.push(new Product(++this.id, "Pink heaven", 3, 0, 'http://res.cloudinary.com/lush/image/upload/v1542372220/lush_content/products/main/2018/11/web_marshmallow_world_community_bath_bombs_2018.jpg'));
    this.products.push(new Product(++this.id, "Rainbow", 6, 0, 'https://media1.popsugar-assets.com/files/thumbor/NT2zFTlkADfjgasMOe4hKa_h4UU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/11/656/n/1922153/b114f43b4f3ce3eb_GroovyKindOfLove/i/Lush-Groovy-Kind-Love-Bath-Bomb.jpg'));
    this.products.push(new Product(++this.id, "Unicorn", 7, 0, 'https://www.justmylook.com/images/bomb-cosmetics-i-believe-in-unicorns-bath-bomb-p10631-26183_image.jpg'));
    this.products.push(new Product(++this.id, "Sweet dream", 5, 0, 'https://www.lushusa.com/dw/image/v2/BDMQ_PRD/on/demandware.static/-/Sites-lushcosmetics-export/default/dwd8601a0d/images/product/01982_1.jpg?sw=450&sh=450'));
    this.products.push(new Product(++this.id, "Purple sprinkle", 5, 0, 'https://sc04.alicdn.com/kf/H507d96a4dd614bea97c7a7e75b90ae1eZ.jpg'));
    this.products.push(new Product(++this.id, "Lavender", 5, 0, 'https://homesteadersofamerica.com/wp-content/uploads/2020/04/Lavender-Goats-Milk-Soap-8-of-9-scaled.jpg'));
    this.products.push(new Product(++this.id, "Amber", 6, 0, 'https://lh3.googleusercontent.com/proxy/LR7Pca46TUrguMFzlcQkE6LI_hEFIRgani6ib5O5Eio5X_-wuTi6rGg2ZdWJtjUAw4pf80t5DIoiIR2ORKFEqAIXbZ1w1d36IZS6n20TJ_K3Pyv4ZFq3Mj-6EQ0'));
    //this.products.push(new Product(++this.id, "Vanilla", 5, 0, 'https://i.pinimg.com/originals/b4/51/28/b45128f7a3c2452b65901ae21a8225a1.jpg'));
  }

  public pushId(id: number) {
    this.selection.push(id)
  }

  ngOnInit(): void {
  }

}
