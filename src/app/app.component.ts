import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LearningAngular';
  displayValue:string='';
  displayValue2:string='';
  getName1() {
    alert('Function Called');
  }
  getName2(name: string) {
    alert('Yeah! Argument is passed');
  }
  getName3(name: string, secondName: string) {
    alert(name);
    alert(secondName);
  }
  getData() {
    console.log('button is clicked');
  }
  getInput(value: string) {
    console.log(value);
  }
  getInputReal(value: string) {
    this.displayValue=value;
    console.log(value);
  }
  getInputReal1(value: string) {
    this.displayValue2=value;
    console.log(value);
  }
}
