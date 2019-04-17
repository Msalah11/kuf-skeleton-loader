import { TestBed } from '@angular/core/testing';

import { KufSkeletonLoaderService } from './kuf-skeleton-loader.service';

describe('KufSkeletonLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KufSkeletonLoaderService = TestBed.get(KufSkeletonLoaderService);
    expect(service).toBeTruthy();
  });
});
