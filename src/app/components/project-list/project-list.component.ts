import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.services';
import { ObservableTracker } from '../../services/observabletracker.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Subscription, forkJoin} from 'rxjs';
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
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  itemDetail: object;
  projectList: Array<any> = [];
  detailViewActive = false;
  error: string ;
  itemId: number;
  trackerObj;

  // define default subscribe callbacks
  loadProjectsObs = {
    next: (data) => {
      return data.projectList ? this.projectList = data.projectList : [];
    }, // this needs to change according to needs
    error: (err) => this.error = err,
    // complete: () => this.tracker.updateState(false) // hides loadingSpinner when complete
  };

  constructor(
    private Route: ActivatedRoute,
    private ProjectService: ListService,
    private tracker: ObservableTracker) { }

  ngOnInit() {
    // get id from route
    // get data from service
    this.getData();
  }

  getData = () => {
    // where ever we need data services, just pass them to an array
    const arrayOfObserv = [this.ProjectService.getItemList()];

    // tracker service injected into constructor
    this.tracker.ready(this.ProjectService.getItemList()).subscribe(this.loadProjectsObs);
  }

  OnDestroy() {
    // prevent leaks from our tracker
    this.trackerObj.unsubscribe();
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

  startIt() {
    const fetches = [
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
      this.ProjectService.getItemList(),
    ];
    // example tracker ready on press event
    this.tracker.ready(forkJoin(fetches)).subscribe(this.loadProjectsObs);
  }


}
