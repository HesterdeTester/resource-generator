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
    console.log(this.geode);
    
    this.cd.detectChanges();
  }

  createChart() {
    const htmlRef = (this.elementRef.nativeElement.querySelector('#miningChart')).getContext('2d');
    console.log('htmlRef: ' + htmlRef);
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
            data: [24, 16, 34, 24, 2]
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

    // this.chart = new Chart(htmlRef, {
    //   type: 'doughnut',
    //   data: {
    //     datasets: [{
    //       backgroundColor: ['red', 'blue', 'green'],
    //       data: [10, 20, 30, 40]
    //     }],
    //     labels: [
    //       'ss', 'oo', 'ee'
    //     ]
    //   },
    //   options: {
    //     display: true,
    //     maintainAspectRatio: true,
    //     legend: false,
    //     animation: false,
    //     responsive: true
    //   }
    // });

    console.log(this.chart);
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
