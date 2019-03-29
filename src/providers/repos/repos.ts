import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ReposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReposProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReposProvider Provider');
  }

}
