import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/';
@Injectable()
export class HttpHandlerService {
  constructor(private http: Http) {  }
  get(url: string, handler: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    this.http.get(url, options)
      .map(res => res.json())
      .subscribe((res: any) => {
        handler(res);
      });
  }
}
