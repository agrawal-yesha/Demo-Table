import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDetailComponent } from './owner-detail.component';
import { OwnerDetailRoutingModule } from './owner-detail-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OwnerDetailComponent
  ],
  imports: [
    CommonModule,
    OwnerDetailRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class OwnerDetailModule { }
