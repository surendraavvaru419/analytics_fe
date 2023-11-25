import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 5;
  
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
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: "B",
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: "C",
		  draggable: true
	  }
  ]
}

