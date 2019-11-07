import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { ManageOverlayService } from '../manage-overlay.service';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  mainDropdownStatus: boolean = false;
  manageDropdownStatus: boolean = false;

  menuStatus(element: string) {  
    if(element === "main") {
      this.mainDropdownStatus = !this.mainDropdownStatus;
    }
    else if(element === "manage") {
      this.manageDropdownStatus = !this.manageDropdownStatus;
    }
    this.manageOverlayService.manageOverlay();
  }

  constructor(private manageOverlayService: ManageOverlayService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.manageOverlayService.overlayClickedSubject
      .subscribe((isOverlayActive) => {
        if(!isOverlayActive) {
          this.mainDropdownStatus = false;
          this.manageDropdownStatus = false;
        }
      });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {

  }
}
