import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.css']
})
export class StrainComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Strain profile");
  }

}
