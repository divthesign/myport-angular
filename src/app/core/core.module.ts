import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MainComponent } from './main/main.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CabeceraComponent, MainComponent, PieComponent],
  exports: [CabeceraComponent,MainComponent, PieComponent]
})
export class CoreModule { }
