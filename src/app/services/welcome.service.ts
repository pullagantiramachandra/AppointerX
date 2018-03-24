import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class WelcomeService {

  private user = new BehaviorSubject<string>('');
  currentUser = this.user.asObservable();

  private op = new BehaviorSubject<boolean>(false);
  opAvailable = this.op.asObservable();
  
  constructor() { }

 setMessage(name:string){
  this.user.next(name);
 }
 getMessage(){
   return this.currentUser;
 }
 setOpAvailabe(b:boolean){
  this.op.next(b);
 }
 getOpAvailable(){
   return this.opAvailable;
 }
 
}
