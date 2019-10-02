import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() menuChange = new EventEmitter<boolean>()
  mainDropdownStatus: boolean = false;
  manageDropdownStatus: boolean = false;

  displayMenu(element: string) {  
    if(element === "main") {
      this.mainDropdownStatus = !this.mainDropdownStatus;
    }
    else if(element === "manage") {
      this.manageDropdownStatus = !this.manageDropdownStatus;
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
