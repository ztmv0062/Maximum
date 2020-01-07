import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FrmValidationModule } from 'D:/Projects/Maximum/src/app/demo/pages/form-elements/frm-validation/frm-validation.module'
import { CustomFormsModule } from 'ng2-validation';
@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FrmValidationModule,
    CustomFormsModule

  ],
  declarations:[
    SettingsComponent,    
  ]
})
export class SettingsModule { }
