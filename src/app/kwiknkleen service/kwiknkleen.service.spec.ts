import { TestBed } from '@angular/core/testing';

import { KwiknkleenService } from './kwiknkleen.service';

describe('KwiknkleenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KwiknkleenService = TestBed.get(KwiknkleenService);
    expect(service).toBeTruthy();
  });
});
