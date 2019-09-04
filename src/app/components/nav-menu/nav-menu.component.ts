import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import NavMenuConfig from './nav-menu.config';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('.25s ease-out',
              style({ transform: 'translateX(0%)', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({transform: 'translateX(0%)', opacity: 1 }),
            animate('.25s ease-in',
              style({transform: 'translateX(100%)', opacity: 0 }))
          ]
        )
      ]
    )
  ]

})
export class NavMenuComponent implements OnInit {
  routeList = NavMenuConfig;
  subMenuRoutes = [];

  @Input() isActive: boolean;
  @Output() closeNavMenu: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {  }


  onCloseMenu = () => {
    this.isActive = false;
    this.closeNavMenu.emit(this.isActive);
  }
  showSubMenu = (routePath) => {
    this.subMenuRoutes = this.routeList.filter((item) => {
      console.log(item);
      if (item.path === routePath) {
        return item;
      }
    });
  }
  menuHome = () => {
    this.subMenuRoutes = [];
  }
}
