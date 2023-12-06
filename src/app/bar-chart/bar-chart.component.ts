import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  public chart: any;

  constructor() { }
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyBarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['John', 'Jane' , 'Alice' , 'Bob' , 'Charlie' , 'Eva' , 'Michael' , 'Sophia' , 'Christopher' , 'Isabella'], 
	       datasets: [
          {
            label: "Number of Orders",
            data: ['6','4', '3', '2', '2' ,
								 '1' , '1' , '1' , '1',  '1'],
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
