import { Injectable } from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [];

  constructor() { 

  this.products.push(new Product(1, "Blue marshmellow", 4, 1, 'https://www.byrdie.com/thmb/lVfKDQHUDS4Xlxdv0CLs1Eyyo1Y=/800x800/smart/filters:no_upscale()/04031_a-174d61f164f94dca9faeb6ad73b57f24.jpg'));
    this.products.push(new Product(2, "Pink heaven", 4, 0, 'http://res.cloudinary.com/lush/image/upload/v1542372220/lush_content/products/main/2018/11/web_marshmallow_world_community_bath_bombs_2018.jpg'));
    this.products.push(new Product(3, "Rainbow", 4, 0, 'https://media1.popsugar-assets.com/files/thumbor/NT2zFTlkADfjgasMOe4hKa_h4UU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/11/656/n/1922153/b114f43b4f3ce3eb_GroovyKindOfLove/i/Lush-Groovy-Kind-Love-Bath-Bomb.jpg'));
    this.products.push(new Product(4, "Unicorn", 7, 0, 'https://www.justmylook.com/images/bomb-cosmetics-i-believe-in-unicorns-bath-bomb-p10631-26183_image.jpg'));
    this.products.push(new Product(5, "Sweet dream", 5, 0, 'https://www.lushusa.com/dw/image/v2/BDMQ_PRD/on/demandware.static/-/Sites-lushcosmetics-export/default/dwd8601a0d/images/product/01982_1.jpg?sw=450&sh=450'));
    this.products.push(new Product(6, "Purple sprinkle", 5, 15, 'https://sc04.alicdn.com/kf/H507d96a4dd614bea97c7a7e75b90ae1eZ.jpg'));
    this.products.push(new Product(7, "Lavender", 5, 0, 'https://ae01.alicdn.com/kf/HTB1QqMWJMHqK1RjSZFkq6x.WFXaT/Tsing-120g-Bath-Bomb-Lavender-Jasmine-Bubble-Bath-Bomb-Handmade-SPA-Gift-Set-Stress-Relief-Natural.jpg'));
    this.products.push(new Product(8, "Strawberry", 4, 0, 'https://www.stenders-cosmetics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/b/bblm010_magnolia_foaming_ball_web.jpg'));
    //this.products.push(new Product(9, "Vanilla", 5, 0, 'https://i.pinimg.com/originals/b4/51/28/b45128f7a3c2452b65901ae21a8225a1.jpg'));
}
}