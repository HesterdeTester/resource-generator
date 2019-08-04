import { Component, OnInit, AfterViewInit, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mining-chart',
  templateUrl: './mining-chart.component.html',
  styleUrls: ['./mining-chart.component.scss']
})
export class MiningChartComponent implements OnInit, AfterViewInit {

  chart: any;
  @Input() geode: any;

  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.createChart();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  createChart() {
    const htmlRef = (this.elementRef.nativeElement.querySelector('#miningChart')).getContext('2d');
    // this will be our beautiful chart, now some options:
    this.chart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['Unubtanium', 'Surilium', 'Dalium', 'Blarnium', 'Empty'],
        datasets: [
          {
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            fill: false,
            borderColor: '#3cba9f',
            data: [this.geode.chances.unubtanium, this.geode.chances.surilium, this.geode.chances.dalium, this.geode.chances.blarnium, 2]
          }
        ]
      }, // nog te vullen
      options: {
        display: true,
        maintainAspectRatio: false,
        animation: false,
        responsive: true,
        legend: { display: false },
        title: { display: false },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  setData(): any {
    return {
      datasets: [{
        data: [24, 16, 34, 24]
      }],
      labels: ['Unubtanium', 'Surilium', 'Dalium', 'Blarnium']
    };
  }

}
