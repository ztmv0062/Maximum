import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';


import { CustomFormsModule } from 'ng2-validation';
import { FrmValidationModule } from '../pages/form-elements/frm-validation/frm-validation.module';
// import { DataTableModule } from 'angular-6-datatable';
import { DataTablesModule } from 'angular-datatables';
import { AddAccountRoutingModule } from './add-account-routing.module';
import { AddAccountComponent } from './add-account.component';
@NgModule({
  imports: [
    CommonModule,
    AddAccountRoutingModule,
    // SharedModule,
    // FrmValidationModule,
    // CustomFormsModule,
    // DataTablesModule
   
    SharedModule,
    FrmValidationModule,
    CustomFormsModule,
    DataTablesModule

  ],
  declarations:[
      AddAccountComponent
  ]
})
export class AddAccountModule { }
