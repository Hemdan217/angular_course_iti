import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userLog: boolean;
  constructor(private userauthService: UserAuthService) {
    this.userLog = this.userauthService.isUserLogged;
  }
  ngOnInit(): void {
    // this.userLog=this.userauthService.isUserLogged;

    // console.log(this.userLog);
    this.userauthService.getUserStatus().subscribe(data => {
      this.userLog = data;
      console.log(this.userLog);
    });
  }
}
