import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sideBarService: SidebarService ) {
    
    this.menuItems = sideBarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {
  }

}
