import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiningFormComponent } from './mining-form/mining-form.component';
import { MiningChartComponent } from './mining-form/mining-chart/mining-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MiningFormComponent,
    MiningChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
