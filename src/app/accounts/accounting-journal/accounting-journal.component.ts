import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-accounting-journal',
  templateUrl: './accounting-journal.component.html',
  styleUrls: ['./accounting-journal.component.css']
})
export class AccountingJournalComponent implements OnInit {

  constructor(private commonTitle : CommonTitle, private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Accounting journal");
  }

}
