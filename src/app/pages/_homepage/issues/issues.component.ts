import { Component, OnInit } from '@angular/core';


interface IssueParams{
  param: string
  value: number
}

@Component({
  selector: 'ngx-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issueParams: IssueParams [];
  constructor() { }

  ngOnInit(): void {
    this.issueParams = [
      {
        param: 'Links on homepage', 
        value: 132
      },
      {
        param: 'Broken links', 
        value: 123
      },
      {
        param: 'Redundant links', 
        value: 65
      }
    ];
  }
}
