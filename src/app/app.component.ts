import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appInput:number = 0;
  myChange = '';
  onChanged(event){
    this.myChange = event;
  }
}
