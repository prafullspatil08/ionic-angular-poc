import { TestBed } from '@angular/core/testing';

import { TranslationsServiceService } from './translations-service.service';

describe('TranslationsServiceService', () => {
  let service: TranslationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
