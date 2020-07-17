// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modulos librerias
//     ng2-charts
import { ChartsModule } from 'ng2-charts';

// Componentes craedos
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonutComponent } from './grafico-donut/grafico-donut.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficoDonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    GraficoDonutComponent
  ]
})
export class ComponentsModule { }
