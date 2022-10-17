import { TestBed } from '@angular/core/testing';

import { SequenceCalculatorService } from './sequence-calculator.service';

describe('SequenceCalculatorService', () => {
  let service: SequenceCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SequenceCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
