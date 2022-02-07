import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterUserService) { }
  socials=["FaceBook","Instagram","Twitter"];
  userModel:User=new User("","","","","");
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.userModel);
    this.registerService.register(this.userModel).subscribe((res:any)=>
      {
        console.log("success",res);
        localStorage.setItem(res.email,JSON.stringify(res));
      })
  }
}
