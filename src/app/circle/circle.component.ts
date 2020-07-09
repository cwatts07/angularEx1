import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  diameter=[{prop1:"I am in danger :)", show:true, color: 'blue'},
   {prop1:"I am here", show:false, color:'green'}
  ];
  isCircle=true;
  filter:string='';
  @Input() defaultVal: number;
  @Output() changed = new EventEmitter<string>();
  onClick(){
    this.changed.emit('I changed');
  }
}
