import { Component, OnInit, Input,Output, ViewChild,Renderer2,ElementRef,EventEmitter } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-item-detail',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({
          transform:'translateX(100%)',
        }),
        animate('300ms',style({
          transform:'translateX(0%)',
        }))
      ]),
      transition('void => *', [
        animate('300ms',style({
          transform:'translateX(100%)',
        }))
      ]),
    ]),
  ],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() itemDetail:any;
  @Input() animState:any;
  @Output() animStateFinished: EventEmitter<any> = new EventEmitter();
  address:string;
  phone:string;
  twitter:string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.address = this.itemDetail.location.address;
    this.phone = this.itemDetail.contact== undefined ? false : this.itemDetail.contact.phone;
    this.twitter = this.itemDetail.contact== undefined ? false : this.itemDetail.contact.twitter;
  }

  
  

}
