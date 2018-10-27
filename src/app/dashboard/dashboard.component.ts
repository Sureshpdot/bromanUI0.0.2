// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { ThemeConstants } from '../shared/config/theme-constant';
import 'ammap3';
import 'ammap3/ammap/maps/js/usaLow';
import Chart from 'chart.js';
import 'assets/js/jquery.sparkline/jquery.sparkline.js';
import * as $ from 'jquery';
import { CommonTitle } from '../title/title.service';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit{
   
  
    constructor(private commonTitle : CommonTitle,private title:Title) {  
    }

    ngOnInit() {
        //SET TITLE
        this.title.setTitle(this.commonTitle.title+ "Dashboard");
    }
}
