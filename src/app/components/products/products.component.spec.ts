import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsComponent } from './products.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { LoaderComponent } from '../loader/loader.component';
import { ProductsService } from 'src/app/services/products/products.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent, PaginatorComponent, LoaderComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test OnNext on Previes Method', () => {
    component.onNext(1)
    expect(component.current).toEqual(2)
  });

  it('test Previous Method', () => {
    component.onPrevious(1)
    expect(component.current).toEqual(0)
  });
});
