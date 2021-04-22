import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EWizardComponent } from './e-wizard.component';
import {
  // NbActionsModule,
  // NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  // NbDatepickerModule, NbIconModule,
  // NbInputModule,
  // NbRadioModule,
  // NbSelectModule,
  // NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [
    EWizardComponent,
    // NbCardModule,
    
  ],
  imports: [
    CommonModule,
    NbCheckboxModule,
    NbCardModule,
    ThemeModule,
  ]
})
export class EWizardModule { }
