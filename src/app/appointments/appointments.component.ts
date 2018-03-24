import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {  
  
  users:any =[
    {"name":"Ramesh","id":123,"date":new Date(),"status":"waiting"},
    {"name":"Pawan","id":124,"date":new Date(),"status":"waiting"},
    {"name":"Siddu","id":125,"date":new Date(),"status":"waiting"},
    {"name":"Pradeep","id":126,"date":new Date(),"status":"waiting"},
    {"name":"Ramaiah","id":127,"date":new Date(),"status":"waiting"},
    {"name":"Rajesh","id":122,"date":new Date(),"status":"waiting"},
    {"name":"Ramesh","id":123,"date":new Date(),"status":"waiting"},
    {"name":"Pawan","id":124,"date":new Date(),"status":"waiting"},
    {"name":"Siddu","id":125,"date":new Date(),"status":"waiting"},
    {"name":"Pradeep","id":126,"date":new Date(),"status":"waiting"},
    {"name":"Ramaiah","id":127,"date":new Date(),"status":"waiting"},
    {"name":"Rajesh","id":122,"date":new Date(),"status":"waiting"}
  ];
  constructor( ) {}

  ngOnInit() {
    
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}