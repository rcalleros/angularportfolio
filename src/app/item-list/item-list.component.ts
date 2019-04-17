import { Component, OnInit } from '@angular/core';
import { ListService } from './list.services';
import { Restaurants } from './Item';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-item-list',
  animations: [

    trigger('openClose', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
        }),
        animate('300ms', style({
          transform: 'translateX(0%)',
        }))
      ]),
      transition(':leave', [
        animate('300ms', style({
          transform: 'translateX(-100%)',
        }))
      ]),
    ]),
  ],
  providers: [ListService],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemList;
  Item: Restaurants;
  routingSubscription: any;
  itemId: any;
  itemDetail: object;
  detailViewActive = false;
  isNavActive = false;
  constructor(
    private Route: ActivatedRoute,
    private ListService: ListService) { }

  ngOnInit() {
    // get id from route
    this.routingSubscription = this.Route.params.subscribe(params => this.itemId = params.id);
    // get data from service
    this.getData();
  }
  getData = () => {
    this.ListService.getItemList().subscribe((data: Restaurants) => this.itemList = data.restaurants);
  }

  OnDestroy() {
    this.routingSubscription.unsubscribe();
  }

  onPress = (id) => {
    this.itemId = id;
    const data = this.itemList.filter((item, index) => index === id);
    this.itemDetail = data[0];
    this.detailViewActive = true;
  }
  onPressBack = () => {

   this.detailViewActive = false;
   this.itemId = undefined;

  }
  onPressLeftBtn(topBarProperties){
    console.log(topBarProperties);
    if (topBarProperties.elementClicked === 'backBtn'){
      // detail view should return false to go back;
      this.detailViewActive = topBarProperties.detailViewActive;
      // id to undefined;
      this.itemId = undefined;
    } else if (topBarProperties.elementClicked === 'mobileBtn') {
      this.isNavActive = topBarProperties.isNavActive;
    }
  }
  showList() {
    this.detailViewActive = false;

    this.itemId = undefined;
  }
  closeNavMenu =() => {
    this.isNavActive = false;
  }

}
