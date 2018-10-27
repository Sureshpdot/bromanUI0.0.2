import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable()
export class CompanySettingsService {

  constructor(private _http:Http) { }

  /**
   * @description Save Company Settings
   * @param com CompanySettings Model
   * @returns Status
   */
  comSave(com){
      return this._http.post('url',com,).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Flock Settings
   * @param flock FlockSettings Model
   * @returns Status
   */
  flockSave(flock){
      return this._http.post('url',flock,).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Record Settings
   * @param rec RecordSettings Model
   * @returns Status
   */
  recordSave(rec){
      return this._http.post('url',rec,).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Inventory Settings
   * @param inv InventorySettings Model
   * @returns Status
   */
  inventorySave(inv){
      return this._http.post('url',inv).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Sales Settings
   * @param sale SalesSettings Model
   * @returns Status
   */
  saleSave(sale){
      return this._http.post('url',sale,).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Expenses Settings
   * @param exp ExpensesSettings Model
   * @returns Status
   */
  expenseSave(exp){
      return this._http.post('url',exp).pipe(map((res:any)=>res.status));
  };

  /**
   * @description Save Advanced Settings
   * @param adv AdvancedSettings Model
   * @returns Status
   */
  advanceSave(adv){
       return this._http.post('url',adv,).pipe(map((res:any)=>res.status));
  };




}
