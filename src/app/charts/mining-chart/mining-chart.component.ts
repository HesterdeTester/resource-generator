import { Component, OnInit, AfterViewInit, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';
import pattern from 'patternomaly';

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
    console.log("hallo");
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
        labels: ['Unubtanium: ' + this.geode.chances.unubtanium + '%', 'Surilium: ' + this.geode.chances.surilium + '%', 'Dalium: ' + this.geode.chances.dalium + '%', 'Blarnium: ' + this.geode.chances.blarnium + '%', 'Empty: 2%'],
        datasets: [
          {
            backgroundColor: [
              pattern.draw('weave', '#3e95cd'),
              pattern.draw('dot', '#8e5ea2'),
              pattern.draw('diamond-box', '#3cba9f'),
              pattern.draw('zigzag-vertical', '#f67b78'),
              pattern.draw('cross', '#0f0f0f'),
          ],
            fill: false,
            borderColor: '#3cba9f',
            data: [this.geode.chances.unubtanium, this.geode.chances.surilium, this.geode.chances.dalium, this.geode.chances.blarnium, 2]
          }
        ]
      },
      options: {
        display: true,
        maintainAspectRatio: false,
        animation: false,
        responsive: true,
        legend: { display: false },
        title: {
          display: true,
          text: this.geode.name,
          fontSize: 24,
          fontColor: 'white'
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontColor: 'white',
              fontSize: 13
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              fontColor: 'white'
            }
          }],

        }
      }
    });
  }
}
