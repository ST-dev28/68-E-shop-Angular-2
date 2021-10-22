export class Product {
    public id?: number;
    public name: string;
    public qty: number = 0;
    public price: number;
    public disc: number = 0;
    public image: any;

    public constructor(name: string, qty: number, price: number, disc: number, image:string){
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.disc = disc;
        this.image = image;
    }

    public add(): void { 
        this.qty++;
    }

    public remove(): void {
        if (this.qty > 0) {
        this.qty--;
        } else if(this.qty === 0) {
            return;
        } 
    }
}