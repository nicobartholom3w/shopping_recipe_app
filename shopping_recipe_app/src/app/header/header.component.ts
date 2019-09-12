import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() menuChange = new EventEmitter<boolean>()
  dropdownStatus: boolean = false

  displayMenu() {  
    this.dropdownStatus = !this.dropdownStatus
  }

  constructor() { }

  ngOnInit() {

  }

}
