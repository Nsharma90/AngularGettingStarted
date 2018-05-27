import { Component } from "@angular/core";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html'
})


export class ProductListComponent{
    public pageTitle : String = 'Books List';
    imageWidth : number = 50;
    imageLength : number = 50;
    showImage : Boolean = false;

    products : any[] = [
    {
        "productId": 2,
        "productName": "Thirteen Reasons Why  (English, Paperback, Jay Asher)",
        "productCode": "GDN 0023",
        "releaseDate": "March 19 2018",
        "price": "$142",
        "description": "nothing to describe ",
        "starRating": 5,
        "imageUrl": "https://rukminim1.flixcart.com/image/704/704/jay8xow0/book/8/8/0/thirteen-reasons-why-original-imafyewfhphkqggg.jpeg?q=70"

    },
    {
        "productId": 3,
        "productName": "The Perks of Being a Wallflower Paperback – 14 Aug 2012",
        "productCode": "GDN 0043",
        "releaseDate": "December 19 2017",
        "price": "123$",
        "description": "pages 133 ",
        "starRating": 4.2,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51GuzoWiFpL._SX355_BO1,204,203,200_.jpg"

    }
];

toggleImage() : void {
this.showImage = !this.showImage;
}
}