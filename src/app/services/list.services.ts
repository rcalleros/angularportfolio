
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) { }
  Url = 'https://uimagic.com/wp-json/wp/v2/project?_embed';
  itemList: Restaurants;

  obs1 = new Observable((observer) => {
    // Get the next and error callbacks. These will be passed in when
    // the consumer subscribes.
    const {next, error} = observer;
    let watchId;

    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(next, error);
    } else {
      error('Geolocation not available');
    }

    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
  });

  observalbleTracker = () => {

  }

  getItemList = () => this.http.get<Restaurants>(this.Url).pipe(map( data => this.cleanUpResponse(data)));

  cleanUpResponse = (data): object[] => data.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      content: item.content.rendered,
      image: item._embedded['wp:featuredmedia']['0'].source_url
    };
  })
}