import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'promise-tracker',
  template: '<div class="progress-loader-overlay"><div class="loader"><h1>promise</h1></div></div>',
  styleUrls: ['./promise-tracker.component.scss']
})
export class PromiseTrackerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
