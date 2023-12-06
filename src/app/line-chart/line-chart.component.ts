import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyLineChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Coffee Maker', 'External Hard Drive', 'Smart Watch','Fitness Tracker',
								 'Bluetooth Speaker', 'Macbook Pro 14', 'Macbook Air 14','iPhone 14', 'iPhone 15 pro' , 'Macbook Pro 16'], 
	       datasets: [
          {
            label: "Number of users ordered",
            data: ['11','10', '9', '5', '5',
								 '1', '1', '1' , '1' , '1'],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(0,255,0)',
              'rgb(0,0,255)',
              'rgb(255,255,0)',
              'rgb(255,0,255)',
              'rgb(0,255,255)',
              'rgb(0, 0, 0)',
              'rgb(45, 54, 65)'
            ],
          } 
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
