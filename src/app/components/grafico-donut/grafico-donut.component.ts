import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styles: [
  ]
})
export class GraficoDonutComponent implements OnInit {

  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() leyenda: String = 'Leyenda';



  constructor() { }

  ngOnInit(): void {
    console.log('Labels: ', this.doughnutChartLabels);
    console.log('Leyenda: ', this.leyenda);
  }

}
