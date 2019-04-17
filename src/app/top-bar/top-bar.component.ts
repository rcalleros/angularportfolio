import {Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() detailViewActive: boolean;
  @Input() isNavActive;
  constructor() { }

  ngOnInit() {
    console.log(this.isNavActive);
  }

  onPress = (elementClicked?: string) => {
    console.log(elementClicked);
   
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
