import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css'],
})
export class DisplaydataComponent implements OnInit {
  @Input() selectedstate;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    'At Least One	',
    'Immunization',
    'Reportable',
    'Syndromic',
    'Regitry',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];


  ngOnInit(): void { }

  ngOnChanges(): void {
    this.barChartData = [
      {
        data: [
          this.selectedstate.atleast_one_measure,
          this.selectedstate.immunization_measure,
          this.selectedstate.reportable_lab_results_measure,
          this.selectedstate.syndromic_surveillance_measure,
          this.selectedstate.registry_measure,
        ],
        label: 'Measures',
      },
    ];
  }
}
