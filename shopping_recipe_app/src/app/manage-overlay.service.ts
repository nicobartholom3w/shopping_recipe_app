import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ManageOverlayService {
  overlayActive: boolean = false;
  overlayActiveSubject = new Subject<boolean>();
  overlayClickedSubject = new Subject<boolean>();
  constructor() { }

  manageOverlay() {
    this.overlayActive = !this.overlayActive;
    this.overlayActiveSubject.next(this.overlayActive);
  }

  overlayClicked() {
    this.overlayClickedSubject.next(this.overlayActive);
  }
}
