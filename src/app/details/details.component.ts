import { Component, inject } from '@angular/core';
import { photocard } from '../photocard';
import { CardsServiceService } from '../service/cards-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  photos:photocard | undefined
  route:ActivatedRoute = inject(ActivatedRoute)

  constructor(private CardsServiceService:CardsServiceService) {
    const myId = Number(this.route.snapshot.params['id'])
    this.CardsServiceService.getToyId(myId).then(photo =>{
      this.photos = photo
    })
  
  }

}
