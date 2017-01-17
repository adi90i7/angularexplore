import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrialComponentComponent } from './trial-component/trial-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,TrialComponentComponent]
})
export class AppModule { }
