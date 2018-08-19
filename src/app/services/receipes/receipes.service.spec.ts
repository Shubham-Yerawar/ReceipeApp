import { TestBed, inject } from '@angular/core/testing';

import { ReceipesService } from './receipes.service';

describe('ReceipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceipesService]
    });
  });

  it('should be created', inject([ReceipesService], (service: ReceipesService) => {
    expect(service).toBeTruthy();
  }));
});
