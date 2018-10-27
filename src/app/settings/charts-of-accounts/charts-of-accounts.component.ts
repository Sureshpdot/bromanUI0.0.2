import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-charts-of-accounts',
  templateUrl: './charts-of-accounts.component.html',
  styleUrls: ['./charts-of-accounts.component.css']
})
export class ChartsOfAccountsComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title : Title) { }

  ngOnInit() {

    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Chart of accounts");
  }

}
