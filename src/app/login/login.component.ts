import {Component,OnInit} from '@angular/core';
import {FormControl, FormGroup,NgForm, Validators} from '@angular/forms';
import { WelcomeService } from '../services/welcome.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rgpatients:any;
  
     constructor(
       private _user:WelcomeService,
      private _router:Router
    ) { }

  ngOnInit() {
    this.rgpatients = JSON.parse(localStorage.getItem('login'));
  }
  loginForm = new FormGroup({
    email:new FormControl(),
    pass: new FormControl()
  });
  loginUserForm(){
      
      for(var i = 0; i < this.rgpatients.length;i++ ){
        
        if(this.loginForm.value.email == this.rgpatients[i].mail && this.loginForm.value.pass == this.rgpatients[i].pass){
           // console.log('Welcome '+ this.rgpatients[i].fname );
            this._user.setMessage('Welcome '+ this.rgpatients[i].fname);
            this._user.setOpAvailabe(true);
            this._router.navigate(['appointments']);
            return;
        }
      }
      console.log('login fail'); 
     
  }
  
}
