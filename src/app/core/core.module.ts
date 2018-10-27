import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MainComponent } from './main/main.component';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CabeceraComponent, MainComponent, PieComponent, LogoComponent, MenuComponent],
  exports: [CabeceraComponent,MainComponent, PieComponent, MenuComponent]
})
export class CoreModule { }
