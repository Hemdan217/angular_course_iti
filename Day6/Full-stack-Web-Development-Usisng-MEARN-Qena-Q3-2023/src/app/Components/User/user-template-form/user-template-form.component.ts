import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.scss'],
})
export class UserTemplateFormComponent {
  user:Iuser ={} as Iuser;
  constructor(private userService: UserService,private router:Router) {}

  addUser() {
    // static data
    // let u:Iuser={
    //   id:3,
    //   firstName: 'sara',
    //   lastName: 'ahmed',
    //   email: 'sara@gmail.com'
    // };
    // this.userService.signUpUser(u).subscribe({
    //   next:(user)=>{
    //     console.log(user);

    //   },
    //   error:(error)=>{
    //     console.log(error);

    //   }
    // })


    //



    this.userService.signUpUser(this.user).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['/Products']);

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}
