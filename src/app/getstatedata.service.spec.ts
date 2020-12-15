import { TestBed } from '@angular/core/testing';

import { GetstatedataService } from './getstatedata.service';

describe('GetstatedataService', () => {
  let service: GetstatedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetstatedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
