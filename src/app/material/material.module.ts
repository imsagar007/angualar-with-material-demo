import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule, MatIconModule,MatListModule,MatSliderModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatCheckboxModule,MatSidenavModule,MatTabsModule,MatCardModule,MatSelectModule,
    MatProgressSpinnerModule,MatDialogModule,

  ],
  exports: [
    MatToolbarModule,MatIconModule,MatListModule,MatSliderModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatCheckboxModule,MatSidenavModule,MatTabsModule,MatCardModule,MatSelectModule,
    MatProgressSpinnerModule,MatDialogModule,
  ]
})
export class MaterialModule { }
