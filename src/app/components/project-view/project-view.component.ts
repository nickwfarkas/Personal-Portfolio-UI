import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  repository: any;
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.showRepos()
  }

  goToUrl(url: string): void {
    this.document.location.href = url;
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

  convertDate(date: string) {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  showRepos() {
    this.getRepos()
    .subscribe(repo => this.repository = repo);
  }
}
