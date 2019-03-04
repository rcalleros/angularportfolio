import {Input, Output, EventEmitter, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() detailViewActive:boolean;

  constructor() { }

  ngOnInit() {
  }

  onPress =()=>{
    this.clicked.emit(null)
  }
}
