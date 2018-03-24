import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  welcomemessage:string;
  //userExits:boolean = true;
  constructor(private _user:WelcomeService) {
   
   }

  ngOnInit() {
    this._user.currentUser.subscribe(user=>this.welcomemessage =user);
  }
     
}
