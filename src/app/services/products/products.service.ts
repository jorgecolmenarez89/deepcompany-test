import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { API_KEY, API_URL } from 'src/config/constanst';
import { IResponse} from '../../interfaces/Iresponse'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private headers = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getProducts(page: number): Observable<IResponse>  {
    let queryParams = {"page": page};
    this.headers = this.headers.set('x-apikey-marketplace', API_KEY);
    return this.http.get<IResponse>(API_URL, {params: queryParams, headers: this.headers});
  }

}
