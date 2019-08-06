import { Component, OnInit, AfterViewInit, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.scss']
})
export class ResultChartComponent implements OnInit, AfterViewInit {

  chart: any;
  resultLabels: string[] = [];
  resultData: number[] = [];
  @Input() oreArray: any;

  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parseResults();
    this.createChart();
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  parseResults(){
    this.oreArray.forEach(ore => {
      if (ore.name !== 'Totaal aantal'){
      this.resultLabels.push(ore.name);
      this.resultData.push(ore.amount)
    }});
  }
  createChart() {
    const htmlRef = (this.elementRef.nativeElement.querySelector('#resultChart')).getContext('2d');
    // this will be our beautiful chart, now some options:
    this.chart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        labels: this.resultLabels, // het totaal zit hier nog in! :o !!!!
        datasets: [{
          label: '# of Grondstoffen',
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: this.resultData,
          borderWidth: 1
        }]
      },
      options: {
        animation: false,
        responsive: true,
        title: {
          display: false,
        },
      }
    });
  }

}