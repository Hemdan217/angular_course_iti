import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
})
export class UserReactiveFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userForm=new FormGroup(
    //   {
    //     firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //     lastName:new FormControl('',[Validators.required]),
    //     // email:new FormControl('',[Validators.required,Validators.email]),
    //     email:new FormControl('',[Validators.required]),
    //   }
    // );

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required]],
      address: this.fb.array([]),
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      street: '',
    });
  }
  addAddress(){
    this.address.push(this.newAddress());
  }

  removeAddress(numOfIndex: number){
    this.address.removeAt(numOfIndex);
  }
}
