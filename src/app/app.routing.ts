import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { CompanySettingsComponent } from './settings/company-settings/company-settings.component';
import { SettingsLayoutComponent } from './common/settings-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path : 'company-settings',
        component : CompanySettingsComponent
    },
    /*{
        path : '',
        component : SettingsLayoutComponent,
        children : [
            {
                path : 'company-settings',
                loadChildren : './settings/company-settings/company-settings.module#CompanySettingsModule'
            }
        ]
    },*/
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
          
            //Master Routings
            {
                path : 'farm',
                loadChildren : './master/farm/farm.module#FarmModule'
            },
            {
                path : 'shed',
                loadChildren : './master/shed/shed.module#ShedModule'
            },
           
            //Inventory Routings
            {
                path : 'item',
                loadChildren : './inventory/item/item.module#ItemModule'
            },
            {
                path : 'itemcategory',
                loadChildren : './inventory/itemcategory/itemcategory.module#ItemcategoryModule'
            },
            {
                path : 'inventory',
                loadChildren : './inventory/inventory/inventory.module#InventoryModule'
            },

            //Flock Routings
            {
                path : 'strain-profile',
                loadChildren : './flock/strain/strain.module#StrainModule'
            },
            {
                path : 'feed-program',
                loadChildren : './flock/feed-program/feed-program.module#FeedProgramModule'
            },
            {
                path : 'flock',
                loadChildren : './flock/flock/flock.module#FlockModule'
            },
            
            //Settings Routings
            /*{
                path : 'company-settings',
                loadChildren : './settings/company-settings/company-settings.module#CompanySettingsModule'
            },*/
            {
                path : 'chart-of-accounts',
                loadChildren : './settings/charts-of-accounts/charts-of-accounts.module#ChartsOfAccountsModule'
            },
            {
                path : 'alerts-notifications',
                loadChildren : './settings/alerts-notifications/alerts-notifications.module#AlertsNotificationsModule'
            },

            //Records Routings
            {
                path : 'cull-entry',
                loadChildren : './records/cull/cull.module#CullModule'
            },
            {
                path : 'mortality-entry',
                loadChildren : './records/mortality/mortality.module#MortalityModule'
            },
            {
                path : 'egg-entry',
                loadChildren : './records/egg/egg.module#EggModule'
            },
            {
                path : 'vaccine-entry',
                loadChildren : './records/vaccine-admin/vaccine-admin.module#VaccineAdminModule'
            },
            {
                path : 'feed-entry',
                loadChildren : './records/feed-consume/feed-consume.module#FeedConsumeModule'
            },

            //Accounts Routings
            {
                path : 'invoice',
                loadChildren : './accounts/invoice/invoice.module#InvoiceModule'
            },
            {
                path : 'receipt',
                loadChildren : './accounts/receipt/receipt.module#ReceiptModule'
            },
            {
                path : 'expenses',
                loadChildren : './accounts/expenses/expenses.module#ExpensesModule'
            },
            {
                path : 'purchase',
                loadChildren : './accounts/purchase/purchase.module#PurchaseModule'
            },
            {
                path : 'payment',
                loadChildren : './accounts/payment/payment.module#PaymentModule'
            },
            {
                path : 'supplier',
                loadChildren : './accounts/supplier/supplier.module#SupplierModule'
            },
            {
                path : 'customer',
                loadChildren : './accounts/customer/customer.module#CustomerModule'
            },
            {
                path : 'inventory-journal',
                loadChildren : './accounts/inventory-journal/inventory-journal.module#InventoryJournalModule'
            },
            {
                path : 'accouting-journal',
                loadChildren : './accounts/accounting-journal/accounting-journal.module#AccountingJournalModule'
            },
            {
                path : 'credit-note',
                loadChildren : './accounts/credit-note/credit-note.module#CreditNoteModule'
            },
            {
                path : 'debit-note',
                loadChildren : './accounts/debit-note/debit-note.module#DebitNoteModule'
            },

            //Reports Routings
            {
                path : 'reports',
                loadChildren : './reports/reports.module#ReportsModule'
            },

            //User Routings
            {
                path : 'your-account',
                loadChildren : './user/your-account/your-account.module#YourAccountModule'
            },
            {
                path : 'manage-users',
                loadChildren : './user/manage-user/manage-user.module#ManageUserModule'
            },
            {
                path : 'activity-log',
                loadChildren : './user/activity-log/activity-log.module#ActivityLogModule'
            }

        ]
    }
];

