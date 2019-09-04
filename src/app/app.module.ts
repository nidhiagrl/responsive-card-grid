import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { DataFetchService } from './data-fetch.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataFetchService]
})
export class AppModule { }
