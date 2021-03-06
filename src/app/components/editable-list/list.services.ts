
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './Item';
@Injectable()
export class ListService {
  constructor(private http: HttpClient) { }
  // Url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
     Url = 'https://uimagic.com/wp-json/wp/v2/project';
  itemList: Restaurants;

  getItemList() {
    return this.http.get<Restaurants>(this.Url);
  }
 
}