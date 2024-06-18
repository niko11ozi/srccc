import { Component, Input } from '@angular/core';
import { photocard } from '../photocard';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf,NgClass,RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() photo!:photocard

 test:number = 0;
 //p-ს მნიშვნელობა მინდა, რომ ჩაიწეროს ჰედერის p-ში. 

 incre(){
  this.test++
 }


 

}
