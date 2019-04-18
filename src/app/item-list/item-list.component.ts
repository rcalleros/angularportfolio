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
  projectList: Array<any> = [];
  constructor(
    private Route: ActivatedRoute,
    private ProjectService: ListService) { }

  ngOnInit() {
    // get id from route
    this.routingSubscription = this.Route.params.subscribe(params => this.itemId = params.id);
    // get data from service
    this.getData();
  }
  getData = () => {
    this.ProjectService.getItemList().subscribe((data: Restaurants) => {
      this.projectList = this.cleanUpResponse(data);
    });
  }

  OnDestroy() {
    this.routingSubscription.unsubscribe();
  }
  
  cleanUpResponse = (data): object[] => data.map((item, i) => {
    return {
      id: item.id,
      title: item.title.rendered,
      content: item.content.rendered,
      image: item._embedded['wp:featuredmedia']['0'].source_url
    };
  })
  onPress = (id) => {
    this.itemId = id;
    const data = this.projectList.filter((item, index) => item.id === id);
    this.itemDetail = data[0];
    this.detailViewActive = true;
  }
  onPressBack = () => {

   this.detailViewActive = false;
   this.itemId = undefined;

  }
  onPressLeftBtn(topBarProperties){
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
