import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-feed-program',
  templateUrl: './feed-program.component.html',
  styleUrls: ['./feed-program.component.css']
})
export class FeedProgramComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Feed program");
  }

}
