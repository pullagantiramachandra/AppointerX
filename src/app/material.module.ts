import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
 MatButtonModule,
 MatToolbarModule,
 MatInputModule, 
 MatProgressSpinnerModule, 
 MatCardModule,
 MatFormFieldModule,
 MatIconModule,
  MatGridListModule,
  MatSelectModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
  MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule, 
  MatProgressSpinnerModule,
   MatCardModule,
   MatFormFieldModule,
   MatIconModule,
   MatGridListModule,
   MatSelectModule,
   MatMenuModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatDividerModule

    ],
  exports: [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
   MatCardModule,
   MatFormFieldModule,
   MatIconModule,
   MatGridListModule,
   MatSelectModule,
   MatMenuModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatDividerModule
    ],
    
})
export class MaterialModule { }
