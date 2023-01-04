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
  count=0;
  name="vishal Garg";
  disable=false;
  show=true;
  color='green';
  users=['Vishal', 'Gaurav', 'Sourav', 'keshav', 'Harish']
  usersDetails=[
    {name:'Vishal',email: 'V@mail.com', phone: '0000000000', socialAccount:['Facebook','Instagram','Whatsapp']},
    {name:'Gaurav',email: 'G@mail.com', phone: '0000000001', socialAccount:['Facebook','Instagram','Whatsapp']},
    {name:'Sourav',email: 'S@mail.com', phone: '0000000002', socialAccount:['Facebook','Instagram','Whatsapp']},
    {name:'Keshav',email: 'K@mail.com', phone: '0000000003', socialAccount:['Facebook','Instagram','Whatsapp']},
    {name:'Harish',email: 'H@mail.com', phone: '0000000004', socialAccount:['Facebook','Instagram','Whatsapp']}
  ]
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
  counter(type:string){
    type==='add' ?this.count++:this.count--;
  }
}
