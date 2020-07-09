import { Pipe, PipeTransform } from '@angular/core';
interface testObj{
  prop1: string;
  show:boolean;
  color: string;
  style: any;
}
@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: testObj[], filter: string): testObj[] {
    let displayedObj: testObj[]=[];
    if(filter){
      for(let obj of value){
        if(obj.prop1.toLowerCase().includes(filter.toLowerCase())){
          displayedObj.push(obj);
        }
      }
    }else{
      displayedObj = value;
    }
    return displayedObj;
  }

}
