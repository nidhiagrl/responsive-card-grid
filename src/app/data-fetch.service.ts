import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataFetchService {

  constructor(private http: HttpClient) { }
  configUrl = "https://demo4126999.mockable.io/images";
getConfig() {
  return this.http.get(this.configUrl);
}
}