import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() isActive: boolean;
  @Output() closeNavMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onCloseMenu = () => {
    this.isActive = false;
    this.closeNavMenu.emit(this.isActive);
  }

}
