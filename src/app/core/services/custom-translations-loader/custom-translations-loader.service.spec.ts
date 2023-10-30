import { TestBed } from '@angular/core/testing';

import { CustomTranslationsLoaderService } from './custom-translations-loader.service';

describe('CustomTranslationsLoaderService', () => {
  let service: CustomTranslationsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTranslationsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
