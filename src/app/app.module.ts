import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { AgmPolygonComponent } from './agm-polygon/agm-polygon.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChart2Component } from './bar-chart2/bar-chart2.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AgmPolygonComponent,
    ProductsComponent,
    BarChartComponent,
    LineChartComponent,
    BarChart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places', 'drawing', 'geometry']
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
