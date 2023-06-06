import { Component } from '@angular/core';
import { UserAuthService } from '../../Service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private userAuth: UserAuthService, private router: Router) {}
  login() {
    this.userAuth.userLoggedIn('hemdan', 'lhdjh');
    this.router.navigate(['/Logout']);
  }
}
