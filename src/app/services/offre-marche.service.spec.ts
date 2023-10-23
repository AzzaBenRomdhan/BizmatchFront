import { TestBed } from '@angular/core/testing';

import { OffreMarcheService } from './offre-marche.service';

describe('OffreMarcheService', () => {
  let service: OffreMarcheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreMarcheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
