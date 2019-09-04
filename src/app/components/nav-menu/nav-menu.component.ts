import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() isActive: boolean;
  @Output() closeNavMenu: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.router);
  }
  onCloseMenu = () => {
    this.isActive = false;
    this.closeNavMenu.emit(this.isActive);
  }

}
