// import { TestBed } from '@angular/core/testing';

// import { AuthGaurdService } from './auth-gaurd.service';

// describe('AuthGaurdService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: AuthGaurdService = TestBed.get(AuthGaurdService);
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { CoreService } from './core.service';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreService = TestBed.get(CoreService);
    expect(service).toBeTruthy();
  });
});
