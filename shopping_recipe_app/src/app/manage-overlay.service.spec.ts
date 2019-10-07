import { TestBed } from '@angular/core/testing';

import { ManageOverlayService } from './manage-overlay.service';

describe('ManageOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageOverlayService = TestBed.get(ManageOverlayService);
    expect(service).toBeTruthy();
  });
});
