import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { photocard } from '../photocard';
import { FormsModule } from '@angular/forms';
import { CardsServiceService } from '../service/cards-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, CardComponent,NgFor,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  photos:photocard[] = []
filteredphotos:photocard[] = []
  
  // CardsServiceService:CardsServiceService = inject(CardsServiceService)


  constructor(private CardsServiceService:CardsServiceService ){
    this.CardsServiceService.getToys().then((photos:photocard[]) =>{
      this.photos = photos
      this.filteredphotos = photos
    } )
  }




  searchword:string = ''
  filter(){
    this.filteredphotos = this.searchword !== ''? this.photos.filter(el =>el.name.includes(this.searchword)) :this.photos
  }

salesProd(){
  this.filteredphotos  = this.photos.filter(el =>el.sale)
}

}

























// {
//   name:'მოლაპარაკე თოჯინა',
//   imgSrc:'https://i5.walmartimages.com/seo/12-Inch-Black-Baby-Dolls-with-Clothes-A-frican-Realistic-Baby-Washable-Gift-for-Kids-Girls_fe791b5f-4e62-44a7-bbcd-a95d6b77d019.7939db32d615c3a44000c037ab9651b4.jpeg',
//   price:123, 
//   sale:true
// },
// {
//   name:'მანქანა',
//   imgSrc:'data:image/jpeg;base64,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',
//   price:650,  
//   sale:false
// },
// {
//   name:'სპილო',
//   imgSrc:'https://mamasandpapas.au/cdn/shop/products/mamas-papas-soft-toys-welcome-to-the-world-soft-toy-archie-elephant-30951290142885_1200x.jpg?v=1674830554',
//   price:50, 
//   sale:true
// },
// {
//   name:'მანქანა',
//   imgSrc:'https://images.thdstatic.com/productImages/d1ff7acd-2533-48d6-84e7-dd9aafc0034a/svn/pink-tobbi-kid-cars-th17m0813-64_600.jpg',
//   price:720, 
//   sale:true
// },
// {
//   name:'დინოზავრი',
//   imgSrc:'https://image.smythstoys.com/original/desktop/216934.jpg',
//   price:35, 
//   sale:false
// },
// {
//   name:'ნინჯა',
//   imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L1UJ-jFsaqoIwbLJvXrdImPVgpPz2nKxoA&usqp=CAU",
//   price:70,  
//   sale:false
// },
// {
//   name:'რგოლები',
//   imgSrc:'https://wellify.in/cdn/shop/products/Littles-Junior-Ring-Top-Tile-01_1200x.jpg?v=1674021255',
//   price:65, 
//   sale:false
// },
// {
//   name:'ფიგურები',
//   imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QyWmjuCzy8MXCEJzcYAWesy4JVe37Oo0gw&usqp=CAU',
//   price:85, 
//   sale:true
// },
// {
//   name:'პინგვინი',
//   imgSrc:'https://prod-prod-ee-uploads.s3.eu-central-1.amazonaws.com/products/imagery/1090292/large/Gz6NO-rbili-satamasholarge-penguin-plush-toy-45191231489.webp',
//   price:45, 
//   sale:true
// },
// {
//   name:'მანქანა',
//   imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMd2u0HaMXiaVVshcYzY7CYkWYnwfHjYeT8A&usqp=CAU',
//   price:800, 
//   sale:false
// },
// {
//   name:'ფიგურები',
//   imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QyWmjuCzy8MXCEJzcYAWesy4JVe37Oo0gw&usqp=CAU',
//   price:85, 
//   sale:true
// },
// {
//   name:'დათუნია',
//   imgSrc:'https://allmarket.ge/u/52/62/92/LhzC6vFZ4UqufxCHkKf8sA/%E1%83%A1%E1%83%90%E1%83%97%E1%83%90%E1%83%9B%E1%83%90%E1%83%A8%E1%83%9D%20%E1%83%93%E1%83%90%E1%83%97%E1%83%95%E1%83%98%20Same%20Toy%20THT673%20Bear%2013cm%20White.jpg',
//   price:105, 
//   sale:true
// },