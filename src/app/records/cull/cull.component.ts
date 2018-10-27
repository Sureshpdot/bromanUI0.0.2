import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cull',
  templateUrl: './cull.component.html',
  styleUrls: ['./cull.component.css']
})
export class CullComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Cull");
  }

}
