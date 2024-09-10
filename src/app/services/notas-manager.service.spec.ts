import { TestBed } from '@angular/core/testing';

import { NotasManagerService } from './notas-manager.service';

describe('NotasManagerService', () => {
  let service: NotasManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
