import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  commits: any = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getCommits().subscribe((res) => {
      this.commits = res;
    });
  }
}
