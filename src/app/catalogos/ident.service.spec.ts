import { TestBed } from '@angular/core/testing';

import { IdentService } from './ident.service';

describe('IdentService', () => {
  let service: IdentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
