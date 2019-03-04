/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input,Output, ViewChild,Renderer2,ElementRef,EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
  // ...
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

  @ViewChild('gmap') gmapElement: ElementRef;
  @Input() itemDetail:any;
  @Input() animState:any;
  @Output() animStateFinished: EventEmitter<any> = new EventEmitter();
  map: google.maps.Map;
  latLng: any;
  mapProp:any;
  address:string;
  phone:string;
  twitter:string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.address = this.itemDetail.location.address;
    this.phone = this.itemDetail.contact== undefined ? false : this.itemDetail.contact.phone;
    this.twitter = this.itemDetail.contact== undefined ? false : this.itemDetail.contact.twitter;
    this.initMap();
  }

  
  initMap = () =>{
    this.latLng = 
    this.mapProp = {
      center: new google.maps.LatLng(this.itemDetail.location.lat,this.itemDetail.location.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
   
   this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    var mapMarker = new google.maps.Marker({
      position: {
        lat:this.itemDetail.location.lat,
        lng:this.itemDetail.location.lng
      },
      map: this.map,
    });
  }
  animationBegin(e){
    console.log(e);
    if(e.fromState == 'open'){
      this.animStateFinished.emit('close');
    }
  }

}
