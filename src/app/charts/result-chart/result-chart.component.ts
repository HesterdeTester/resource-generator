import { Component, OnInit, AfterViewInit, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';
import {draw, generate} from 'patternomaly';
import pattern from 'patternomaly';

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
      if (ore.name !== 'Total'){
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
          backgroundColor: [
            pattern.draw('weave', '#3e95cd'),
            pattern.draw('dot', '#8e5ea2'),
            pattern.draw('diamond-box', '#3cba9f'),
            pattern.draw('zigzag-vertical', '#f67b78'),
            pattern.draw('cross', '#0f0f0f'),
        ],
          data: this.resultData,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
        fontColor: 'white',
        fontSize: 14,
          }
        },
        animateRotate: true,
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
        },
      }
    });
  }

}