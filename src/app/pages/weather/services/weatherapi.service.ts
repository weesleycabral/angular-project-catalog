import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService extends BaseService {
  public apiKey = '6fe79cc394cb4abab03151520232206';
  public lang = 'pt';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public getCurrentWeather(zipcode: string): Observable<any> {
    const params = {
      q: zipcode,
      lang: this.lang,
      key: this.apiKey,
    }
    return this.http.get(`${this.Basepath()}current.json`, {
      headers: this.Headers(),
      params
    })
  }
}
