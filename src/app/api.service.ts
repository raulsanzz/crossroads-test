import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://api.github.com/repos/raulsanzz/crossroads-test/commits';
  constructor(private http: HttpClient) {}

  getCommits() {
    return this.http.get(this.url);
  }
}
