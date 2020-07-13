import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowroomModule } from './showroom/showroom.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShowroomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
