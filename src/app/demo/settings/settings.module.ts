import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { CustomFormsModule } from 'ng2-validation';
import { FrmValidationModule } from '../pages/form-elements/frm-validation/frm-validation.module';
// import { DataTableModule } from 'angular-6-datatable';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FrmValidationModule,
    CustomFormsModule,
    DataTablesModule

  ],
  declarations:[
    SettingsComponent,    
  ]
})
export class SettingsModule { }
