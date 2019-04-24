import { Component, OnInit } from '@angular/core';
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

  constructor (
    private Route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routingSubscription = this.Route.params.subscribe(params => this.itemId = params.id);
    console.log(this.itemId);
  }

  onPressLeftBtn(topBarProperties) {
    console.table(topBarProperties);
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
