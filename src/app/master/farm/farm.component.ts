import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Farm");

  }

}
