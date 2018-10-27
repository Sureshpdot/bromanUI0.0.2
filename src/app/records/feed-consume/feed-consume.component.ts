import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feed-consume',
  templateUrl: './feed-consume.component.html',
  styleUrls: ['./feed-consume.component.css']
})
export class FeedConsumeComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title : Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Feed consumption");
  }

}
