import { TestBed } from '@angular/core/testing';

import { AppelOffreServiceService } from './appel-offre.service';

describe('AppelOffreService', () => {
  let service: AppelOffreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppelOffreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
