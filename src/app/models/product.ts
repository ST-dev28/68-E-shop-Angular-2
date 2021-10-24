export class Product {
    public id?: number;
    public name: string;
    public qty: number = 0;
    public price: number;
    public disc: number = 0;
    public image?: any;

    public constructor(id: number,name: string, price: number, disc: number, image:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.disc = disc;
        this.image = image;
    }

    public add(): void { 
        this.qty++;
    }

    public remove(): void {
        this.qty--;
    }

    /*public remove(): void {
        if (this.qty > 0) {
        this.qty--;
        } else if(this.qty === 0) {
            return;
        } 
    }*/

     public reserved(): boolean {
        if (this.qty > 0) {
            return true;
        } else {
            return false;

        }
    }
}