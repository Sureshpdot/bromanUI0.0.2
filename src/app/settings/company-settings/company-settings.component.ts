import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';
import { Location } from '@angular/common';
import { SetCompModel } from './model/set-company.model';
import { SetFlockModel } from './model/set-flock.model';
import { SetRecordsModel } from './model/set-records.model';
import { SetInvModel } from './model/set-inventory.model';
import { SetSalesModel } from './model/set-sales.model';
import { SetExpensesModel } from './model/set-expenses.model';
import { SetAdvancedModel } from './model/set-advanced.model';
import { CompanySettingsService } from './company-settings.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent implements OnInit {

 
    name = [];
    
    tabs : any;
    
   // COMPANY SETTINGS MODEL 
   com = new SetCompModel();

   // FLOCK SETTINGS MODEL
   flock = new SetFlockModel();

   // RECORDS SETTINGS MODEL
   rec = new SetRecordsModel();

   // INVENTORY SETTINGS MODEL
   inv = new SetInvModel();

   // SALES SETTINGS MODEL
   sale = new SetSalesModel();

   // EXPENSES SETTINGS MODEL
   exp = new SetExpensesModel();

   // ADVANCED SETTINGS MODEL
   adv = new SetAdvancedModel();

  ngOnInit() {

    this.tabs = 'Company';
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Company settings");

    //SET DEFAULT VALUES CHECKBOX
    this.com.view = false;
    this.com.save = false;
    this.com.edit = false;
    this.com.delete = false;

    this.flock.view = false;
    this.flock.save = false;
    this.flock.edit = false;
    this.flock.delete = false;

    this.rec.view = false;
    this.rec.save = false;
    this.rec.edit = false;
    this.rec.delete = false;

    this.inv.view = false;
    this.inv.save = false;
    this.inv.edit = false;
    this.inv.delete = false;

    this.sale.view = false;
    this.sale.save = false;
    this.sale.edit = false;
    this.sale.delete = false;

    this.exp.view = false;
    this.exp.save = false;
    this.exp.edit = false;
    this.exp.delete = false;

    this.adv.view = false;
    this.adv.save = false;
    this.adv.edit = false;
    this.adv.delete = false;

   
  }

  public app : any;
    public headerThemes: any;
    public changeHeader: any;
    public sidenavThemes: any;
    public changeSidenav: any;
    public headerSelected: any;
    public sidenavSelected : any;
    public searchActived : any;
    public searchModel: any;

    constructor(private commonTitle : CommonTitle,private title:Title,
                private location:Location,private _compSettings:CompanySettingsService) {
        this.app = {
            layout: {
                sidePanelOpen: false,
                isMenuOpened: true,
                isMenuCollapsed: false,
                themeConfigOpen: false,
                rtlActived: false,
                searchActived: false
            }
        };  

        this.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
        this.changeHeader = changeHeader;
    
        function changeHeader(headerTheme) {
            this.headerSelected = headerTheme;
        }
    
        this.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
        //this.changeSidenav = changeSidenav;
    
        /*function changeSidenav(sidenavTheme) {
            this.sidenavSelected = sidenavTheme;
        }*/
    }

    close(){
        this.location.back();
    };

    //COMPANY SETTINGS SUBMIT
    companySubmit(com){
        console.log(this.com);
       /* this._compSettings.comSave(this.com).subscribe(res=>{
            console.log(res);
        }); */
    };

    //FLOCK SETTINGS SUBMIT
    flockSubmit(flock){
        console.log(this.flock);
       /* this._compSettings.flockSave(this.flock).subscribe(res=>{
            console.log(res);
        }); */
    };

    //RECORDS SETTINGS SUBMIT
    recSubmit(rec){
        console.log(this.rec);
        /* this._compSettings.recordSave(this.rec).subscribe(res=>{
            console.log(res);
        }); */
    };

    //INVENTORY SETTINGS SUBMIT
    invSubmit(inv){
        console.log(this.inv);
       /* this._compSettings.inventorySave(this.inv).subscribe(res=>{
            console.log(res);
        }); */
    };

    //SALES SETTINGS SUBMIT
    saleSubmit(sale){
        console.log(this.sale);
        /*this._compSettings.saleSave(this.sale).subscribe(res=>{
            console.log(res);
        });*/
    };
   
    //EXPENSES SETTINGS SUBMIT
    expSubmit(exp){
        console.log(this.exp);
        /* this._compSettings.expenseSave(this.exp).subscribe(res=>{
            console.log(res);
        }); */
    };

    //ADVANCED SETTINGS SUBMIT
    advSubmit(adv){
        console.log(this.adv);
        /*this._compSettings.advanceSave(this.adv).subscribe(res=>{
            console.log(res);
        })*/
    };

     


   
}
