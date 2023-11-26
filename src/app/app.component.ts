import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Implementing OnInit
	constructor(private http: HttpClient) {}
	title = 'api-angular';
	ngOnInit() {
	
		this.http
			.get<any>('https://65628469ee04015769a67826.mockapi.io/api/analytics/analytics', {
			})
			.subscribe(data => {
				console.log(data);
				this.markers = data;
			});
	}

	// google maps zoom level
  zoom: number = 4;
  
  // initial center position for the map
  lat: number = 40.785;
  lng: number = -102.41;
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }



  markers = [
	  {
		  lat: 40.785,
		  lng: -102.41,
		  label: "A",
		  draggable: true
	  }
  ]
}

