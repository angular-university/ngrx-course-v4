/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadThreadsEffectService } from './load-threads-effect.service';

describe('LoadThreadsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadThreadsEffectService]
    });
  });

  it('should ...', inject([LoadThreadsEffectService], (service: LoadThreadsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
