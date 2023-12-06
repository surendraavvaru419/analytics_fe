import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.css']
})
export class BarChart2Component implements OnInit {
  public chart: any;

  constructor() { }
  ngOnInit(): void {  
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyBarChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Coffee Maker', 'External Hard Drive', 'Smart Watch','Fitness Tracker',
								 'Bluetooth Speaker', 'Macbook Pro 14', 'Macbook Air 14','iPhone 14', 'iPhone 15 pro' , 'Macbook Pro 16'], 
	       datasets: [
          {
            label: "Number of orders",
            data: ['11','8', '8', '4', '4',
								 '1', '1', '1' ,'1' , '1'],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
