import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-inventory-journal',
  templateUrl: './inventory-journal.component.html',
  styleUrls: ['./inventory-journal.component.css']
})
export class InventoryJournalComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Inventory journal");
  }

}
