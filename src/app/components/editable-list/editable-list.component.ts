import { Component, OnInit } from '@angular/core';
import { ListService } from './list.services';
import { Restaurants } from './Item';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
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
          transform:'translateX(-100%)',
        }),
        animate('300ms',style({
          transform:'translateX(0%)',
        }))
      ]),
      transition(':leave', [
        animate('300ms',style({
          transform:'translateX(-100%)',
        }))
      ]),
    ]),
  ],
  providers:[ListService],
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss']
})
export class EditableListComponent implements OnInit {
  itemList;
  tempList;
  Item: Restaurants;
  routingSubscription: any;
  itemId:any;
  itemDetail: object;
  detailViewActive: boolean = false;
  constructor(
    private Route: ActivatedRoute,
    private ListService: ListService) { }

  ngOnInit() {
    // get id from route
    this.routingSubscription = this.Route.params.subscribe(params=>this.itemId = params["id"]);
    // get data from service
    this.getData();
  }
  getData = () => {
    this.ListService.getItemList().subscribe((data: Restaurants) => {
      this.itemList = data.restaurants;
      this.tempList = data.restaurants;
    });
  }

 
  OnDestroy(){
    this.routingSubscription.unsubscribe();
  }

  onPress= (id)=>{
    this.itemId = id;
    let data = this.itemList.filter((item,index)=>index == id);
    this.itemDetail = data[0];
    this.detailViewActive = true;
  }
  onPressBack=()=>{

   this.detailViewActive = false;
   this.itemId = undefined;

  }
  showList(){
    this.detailViewActive = false;

    this.itemId = undefined;
  }
  onDelete(itemName){
    this.tempList = this.tempList.filter((itemObj)=> itemObj.name !== itemName);
  }

}
