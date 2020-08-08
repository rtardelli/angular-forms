import { TestBed } from '@angular/core/testing';

import { FormRoundService } from './form-round.service';

describe('FormRoundService', () => {
  let service: FormRoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
