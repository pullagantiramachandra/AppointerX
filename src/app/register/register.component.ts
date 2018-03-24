import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
  
  selected:any = "Physician";
  localStorageObject:any =[];

  constructor() {
     }

  ngOnInit() {
    this.userObject = {
      fname:'admin',
      lname:'admin',
      mail:'admin@gmail.com',
      pass:'admin'
    };
    this.userArray.push(this.userObject);
    localStorage.setItem('login',JSON.stringify(this.userArray));

    if(JSON.parse(localStorage.getItem('login')) != null){
      this.localStorageObject = JSON.parse(localStorage.getItem('login'));
    }
  }
  

  userArray:any =[];
  userObject:any;
  
  registerForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    pass: new FormControl(),
    role: new FormControl(),
    npi: new FormControl(),
    location: new FormControl(),
    add1: new FormControl(),
    add2: new FormControl(),
    city: new FormControl(),
    pincode: new FormControl(),
    state: new FormControl(),
    country: new FormControl()
  }); 

  registerFormDetails(){
   
    if(this.registerForm.value.role === 'patient' || this.registerForm.value.role === 'physician'){
     
      console.log(JSON.parse(localStorage.getItem('login')));
      if(JSON.parse(localStorage.getItem('login')) != null){
          for(let i =0 ; i <  this.localStorageObject.length; i++ ){
              if(this.registerForm.value.email != this.localStorageObject[i].email){
                  this.userObject = {
                    fname:this.registerForm.value.fname,
                    lname:this.registerForm.value.lname,
                    mail:this.registerForm.value.email,
                    pass:this.registerForm.value.pass
                  };
                  this.userArray.push(this.userObject);
                  localStorage.setItem('login',JSON.stringify(this.userArray));
                  return;
              }
          }
          console.log("User email or password already exits");
      }
    }else{
      console.log('please select any one role');
    }
    
   
  }
}

export class Patient{
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:any = 0;
  profilerole:any ='';
}
export class Physician extends Patient{
  nip :any ='';
  location:any = '';
  address1:string = '';
  address2:string = '';
  city:string = '';
  pincode:string = '';
  state:string = '';
  country:string = '';
}