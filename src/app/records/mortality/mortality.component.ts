import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mortality',
  templateUrl: './mortality.component.html',
  styleUrls: ['./mortality.component.css']
})
export class MortalityComponent implements OnInit {

  constructor(private commonTitle:CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Mortality");
  }

}
