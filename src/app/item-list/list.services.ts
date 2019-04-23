
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './Item';
import { map } from "rxjs/operators";
@Injectable()
export class ListService {
  constructor(private http: HttpClient) { }
  // Url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  Url = 'https://uimagic.com/wp-json/wp/v2/project?_embed';
  itemList: Restaurants;

  getItemList = () => this.http.get<Restaurants>(this.Url).pipe(map( data => this.cleanUpResponse(data)));

  cleanUpResponse = (data): object[] => data.map((item, i) => {
    return {
      id: item.id,
      title: item.title.rendered,
      content: item.content.rendered,
      image: item._embedded['wp:featuredmedia']['0'].source_url
    };
  })
}