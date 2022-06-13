import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../service/dbservice.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {

  constructor(private serviceRegister: DbserviceService, private router: Router) { }

  ngOnInit(): void {}

  boolregister: boolean = false;
  booltestpass: boolean = false;

  registerForm = new FormGroup(
  {
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9]).*$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d).*$')]),
    repeatpassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d).*$')]),
    registercheck: new FormControl(null, [Validators.required])
  });

  testSamePassword=():void=>
  {
    let passval: string = this.registerForm.controls['password'].value
    let passreptval: string = this.registerForm.controls['repeatpassword'].value

    if(passval == passreptval)
    {
      this.booltestpass = true;
    }
    else
    {
      this.booltestpass = false;
      this.registerForm.setErrors({'samepassword': false});
    };
  }

  enviar=(): void=>
  {
    if(this.registerForm.status == 'VALID')
    {
      this.serviceRegister.postUser(this.registerForm.value).forEach((user)=>
      {
        console.log(user);
        this.boolregister = true;
        this.router.navigate(['/home']);
      });
    }
  }
}
