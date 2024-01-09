import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/Iresponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

   productsResponse: IResponse = {
    pages: 0,
    current: 0,
    records: 0,
    results: []
  };
  loading = true;
  search: string = '';
  current: number = 1;
  productsToDisplay: Array<any>[] = [];
  perPage = 19;
  total = 0;

  ngOnInit() {
    this.getProducts(this.current);
  }

  getProducts(page: number){
    this.productsService.getProducts(page).subscribe((resp: IResponse) => {
      this.productsResponse = resp;
      this.productsToDisplay  = resp.results
      this.total = resp.pages
      this.loading = false;
    })
  }

  changePerPage(){
    this.loading = true;
    this.current = 1;
    this.getProducts(this.current);
  }

  onGoTo(page: number): void {
    this.current = page;
    this.loading = true;
    this.getProducts(page);
  }

  onNext(page: number): void {
    this.current = page + 1
    this.loading = true;
    this.getProducts(page + 1);
  }

  onPrevious(page: number): void {
    this.current = page - 1
    this.loading = true;
    this.getProducts(page - 1);
  }

  paginate(current: number, perPage: number): Array<any>[] {
    return [...this.productsResponse.results.slice((current - 1) * perPage).slice(0, perPage)];
  }

}
