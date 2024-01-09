import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { IResponse } from 'src/app/interfaces/Iresponse';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts response Ok', () => {
    service.getProducts(1).subscribe((response : IResponse) => {
      expect(response.pages).toEqual(9);          
      expect(response.records).toEqual(163);
    });
  });
});
