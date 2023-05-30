import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  user:boolean = false;
constructor(private userAuthService: UserAuthService){}
  ngOnInit(): void {
    this.user=this.userAuthService.isUserLogged;
  }

  loginFunc(){
    this.userAuthService.userLogin('asd@gmail.com','pass');
    this.user=this.userAuthService.isUserLogged;
  }
  logoutFunc(){
    this.userAuthService.userLogout();
    this.user=this.userAuthService.isUserLogged;
  }
}
