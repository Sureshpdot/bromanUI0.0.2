import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {

  constructor(private commonTitle : CommonTitle, private title : Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Flock");
  }

}
