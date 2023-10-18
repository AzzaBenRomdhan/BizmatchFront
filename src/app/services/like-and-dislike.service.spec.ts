import { TestBed } from '@angular/core/testing';

import { LikeAndDislikeService } from './like-and-dislike.service';

describe('LikeAndDislikeService', () => {
  let service: LikeAndDislikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeAndDislikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
