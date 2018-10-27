import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Item");
  }

}
