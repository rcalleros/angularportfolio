import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.services';
import { ObservableTracker } from '../../services/observabletracker.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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
  providers: [ListService , ObservableTracker],
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
    private ProjectService: ListService,
    private tracker: ObservableTracker) { }

  ngOnInit() {
    // get id from route
    this.routingSubscription = this.Route.params.subscribe(params => this.itemId = params.id);
    // get data from service
    this.getData();
  }

  getData = () => {
    const arrayOfObserv = [this.ProjectService.getItemList()];
    const loadProjectsObs = {
      // next: (data) => conskole.log(data),
      next: (data) => typeof data === 'object' ? this.projectList = data : '',
      error: () => this.error = 'something wrong',
      complete: () => this.promiseTracker = false
    };
    // this.ProjectService.getItemList().subscribe(loadProjectsObs);

    this.tracker.ready(...arrayOfObserv).subscribe(loadProjectsObs);
  }

  organizeRequest = (data) => {
    return data.map( (item, i) => data[i] = item );
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
