import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';

@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.css']
})
export class CreditNoteComponent implements OnInit {

  constructor(private commonTitle : CommonTitle, private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Credit note");
  }

}
