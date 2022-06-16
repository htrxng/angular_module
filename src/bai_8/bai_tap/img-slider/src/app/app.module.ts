import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgSliderComponent,
    ImgSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
    {provide: 'API_URL', useExisting: 'API_ENDPOINT'},
    {
      provide: 'some-token',
      useFactory() {
        return Math.random();
      }
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
