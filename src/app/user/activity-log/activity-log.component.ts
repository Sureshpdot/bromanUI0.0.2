import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  constructor(private commonTitle: CommonTitle,private title : Title) { }

  // DATA TABLE RESPONSIVE & LIVE DATA SEARCH
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();  

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Activity log");

    //DATA TABLE
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching : false,
      lengthChange : false,
    };
  }

}
