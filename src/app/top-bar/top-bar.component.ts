import {Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  itemId: number;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() detailViewActive: boolean;
  @Input() isNavActive;
  constructor( ) { }

  onPress = (elementClicked?: string) => {

    if (elementClicked === 'mobileBtn') {
      this.isNavActive = 'true';
    } else {
      this.detailViewActive = false;
    }
    const topBarProperties = {
      elementClicked,
      isNavActive: this.isNavActive,
      detailViewActive: this.detailViewActive
    };
    this.clicked.emit(topBarProperties);

  }
}
