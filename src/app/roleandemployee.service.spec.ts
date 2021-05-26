import { TestBed } from '@angular/core/testing';

import { RoleandemployeeService } from './roleandemployee.service';

describe('RoleandemployeeService', () => {
  let service: RoleandemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleandemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
