import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../confirmPassword';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterUserService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ///Day 6
  socials = ['FaceBook', 'Instagram', 'Twitter'];
  userModel: User = new User('', '', '', '', '');
  pattern = new RegExp('');

  ngOnInit(): void {}
  ///Day 6
  onSubmit() {
    console.log(this.userModel);
    this.registerService.register(this.userModel).subscribe((res: any) => {
      console.log('success', res);
      localStorage.setItem(res.email, JSON.stringify(res));
    });
  }
  // Day 6
  checkPassword(event: any) {
    this.pattern = event.target.value;
  }

  ////// Day 6
  goPrev() {
    this.router.navigate(['/login']);
  }

  ///Day 7
  registerationForm = this.fb.group(
    {
      userName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      subscribe: [false],
    },
    { validator: [ConfirmPasswordValidator] }
  );
  get userName() {
    return this.registerationForm.get('userName');
  }

  get email() {
    return this.registerationForm.get('email');
  }
  get password() {
    return this.registerationForm.get('password');
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword');
  }
}
