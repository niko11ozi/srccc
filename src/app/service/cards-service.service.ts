import { Injectable } from '@angular/core';
import { photocard } from '../photocard';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  constructor() { }
  url = 'https://66198994125e9bb9f29a395d.mockapi.io/toys'
  async getToys(): Promise<photocard[]>{
    const response = await fetch(this.url);
    return await response.json() ?? []
  }
  
  async getToyId(toyId:number):Promise<photocard|undefined>{
  const response = await fetch(`${this.url}/${toyId}`);
  return await response.json() ?? {}
}

}
