import { HttpClient } from '@angular/http';
import { Injectable } from '@angular/core';
import { Repo } from '../../models/repo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReposProvider {

  constructor(public http: Http) {
    console.log('Hello ReposProvider Provider');
  }

  getRepos(username) : Observable<Repo[]> {
    return this.http.get(`http://api.github.com/users/${username}/repos`).map(res => <Repo[]>res.json());
  }

}
