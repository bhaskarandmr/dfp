import { TestBed } from '@angular/core/testing';

import { NgxAdDfpService } from './ngx-ad-dfp.service';

describe('NgxAdDfpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAdDfpService = TestBed.get(NgxAdDfpService);
    expect(service).toBeTruthy();
  });
});
