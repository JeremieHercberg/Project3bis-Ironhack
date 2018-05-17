import { TestBed, inject } from '@angular/core/testing';

import { ListeProduitsService } from './liste-produits.service';

describe('ListeProduitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeProduitsService]
    });
  });

  it('should be created', inject([ListeProduitsService], (service: ListeProduitsService) => {
    expect(service).toBeTruthy();
  }));
});
