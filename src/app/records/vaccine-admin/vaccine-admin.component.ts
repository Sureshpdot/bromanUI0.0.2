import { Component, OnInit } from '@angular/core';
import { CommonTitle } from '../../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vaccine-admin',
  templateUrl: './vaccine-admin.component.html',
  styleUrls: ['./vaccine-admin.component.css']
})
export class VaccineAdminComponent implements OnInit {

  constructor(private commonTitle : CommonTitle, private title:Title) { }

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Vaccine admin");
  }

}
