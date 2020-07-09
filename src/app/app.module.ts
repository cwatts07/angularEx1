import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { TestPipePipe } from './test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
