import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import fetch from 'node-fetch';
import { from } from 'rxjs';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  repository: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showRepos()
  }

  getRepos() {
    let token = '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';
    let url = 'https://api.github.com/user/repos';
    let options = {  
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    return this.http.get(url, options);
  }

  showRepos() {
    this.getRepos()
    .subscribe(repo => this.repository = repo);
  //     .subscribe((data: any) => this.testData = {
  //       id: data.id
  //     });
  // }
}

// export interface Repository {
//   userName: string;
//   avatarUrl: string;
}