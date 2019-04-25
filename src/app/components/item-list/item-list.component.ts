import { Component, OnInit } from '@angular/core';
import { ListService } from './list.services';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
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
  busy: Subscription;
  routingSubscription: Subscription;
  itemDetail: object;
  projectList: Array<any> = [];
  detailViewActive = false;
  itemId: any;
  promiseTracker = true;
  error: string ;

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
    const loadProjectsObs = {
      next: (data) => this.projectList = data,
      error: () => this.error = 'something wrong',
      complete: () => this.promiseTracker = false
    };
    this.ProjectService.getItemList().subscribe(loadProjectsObs);
  }

  OnDestroy() {
    this.routingSubscription.unsubscribe();
  }

  onPress = (id) => {
    this.itemId = id;
    const data = this.projectList.filter((item, index) => item.id === id);
    this.itemDetail = data[0];
    this.detailViewActive = true;
  }
 
  showList() {
    this.detailViewActive = false;

    this.itemId = undefined;
  }


}
