import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.css']
})
export class EggComponent implements OnInit {

  constructor(private commonTitle:CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Egg collection");
  }

}
