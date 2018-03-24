import { Component,NgModule,OnInit } from '@angular/core';
import { WelcomeService } from './services/welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
 
  profile:string= 'Profile Patient';
  login:boolean = true;
  welcomemessage:string =''
  constructor(private _user:WelcomeService){}
  ngOnInit(){
    this._user.getOpAvailable().subscribe(op=>this.login = op);
    this._user.currentUser.subscribe(user=>{
      this.welcomemessage =user.slice(8);
      
    });
  }
}
