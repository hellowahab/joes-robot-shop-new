import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should have the returned data in cart', (done) => {
    // let req = httpTestingController.expectOne('api/cart');
    // req.flush(TESTDATA);

    service.getCart().subscribe((data) => {
      expect(data.length).toEqual(1);
      done();
    })
    
  });
});
