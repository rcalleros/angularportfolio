import { Component, OnInit } from '@angular/core';
import { ObservableTracker } from './services/observabletracker.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routingSubscription: Subscription;
  isNavActive = false;
  title = 'ng-portfolio';
  detailViewActive = false;
  itemId: any;
  trackerActive;

  constructor (
    private Route: ActivatedRoute,
    private tracker: ObservableTracker
  ) {}

  ngOnInit() {
    this.routingSubscription = this.Route.params.subscribe(params => this.itemId = params.id);
    this.tracker.currentState.subscribe((isActive) => this.trackerActive = isActive);
  }

  onPressLeftBtn(topBarProperties) {
    if (topBarProperties.elementClicked === 'backBtn') {

      // detail view should return false to go back;
      this.detailViewActive = topBarProperties.detailViewActive;

      // id to undefined;
      this.itemId = undefined;

    } else if (topBarProperties.elementClicked === 'mobileBtn') {
      this.isNavActive = topBarProperties.isNavActive;
    }
  }
  closeNavMenu =() => {
    this.isNavActive = false;
  }
}
