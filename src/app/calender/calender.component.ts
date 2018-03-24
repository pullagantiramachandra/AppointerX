import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  date = new Date();
  constructor() { }

  ngOnInit() {
  }

  doctorControl = new FormControl('', [Validators.required]);

  doctors = [
    {name: 'sarma', type: 'Cardiologist'},
    {name: 'latha', type: 'Family Physicians'},
    {name: 'Geetha', type: 'Geriatric Medicine Specialist'},
    {name: 'Peter Willon', type: 'Emergency Medicine Specialist'}
  ];
}
