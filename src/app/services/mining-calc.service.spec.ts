import { TestBed } from '@angular/core/testing';

import { MiningCalcService } from './mining-calc.service';

describe('MiningCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiningCalcService = TestBed.get(MiningCalcService);
    expect(service).toBeTruthy();
  });
});
