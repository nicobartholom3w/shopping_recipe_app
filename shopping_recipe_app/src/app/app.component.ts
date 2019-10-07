import { Component, OnInit } from '@angular/core';
import { ManageOverlayService } from './manage-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mainOverlayActive = this.manageOverlayService.overlayActive;
  

  constructor(private manageOverlayService: ManageOverlayService) {
   
  }

  ngOnInit() {
    this.manageOverlayService.overlayActiveSubject.subscribe((isVisible) => {
      this.mainOverlayActive = isVisible;
    });
  }

  hideOverlay() {
    this.manageOverlayService.manageOverlay();
    this.manageOverlayService.overlayClicked();
  }
}
