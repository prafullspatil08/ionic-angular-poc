import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFeatureRoutingModule } from './example-feature-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleFeatureRoutingModule
  ]
})
export class ExampleFeatureModule { }
