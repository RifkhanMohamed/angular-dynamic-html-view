import { Component, OnInit } from '@angular/core';
import { app } from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-dynamic-html-view';
  name = 'Dynamic Add Fields';
  values:any=[];
  app=new app();
  
  ngOnInit(){
  }

  removevalue(i:number){
    this.values.splice(i,1);
  }

  addvalue(){
    this.app=new app();
    this.values.push(this.app);
  }
}
