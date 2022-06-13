import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../service/dbservice.service';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {

  constructor(private serviceRegister: DbserviceService) { }

  ngOnInit(): void {}

  boolregister: boolean = false;

  registerForm = new FormGroup(
  {
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9]).*$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9]).*$')]),
    repeatpassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9]).*$')])
  });

  enviar=(): void=>
  {
    //console.log(this.registerForm.value);
    //console.log('hehe', this.registerForm, this.registerForm.controls['username'].errors);
    /*this.serviceRegister.getUser().forEach((user)=>
    {
      console.log(user);
    });*/

    this.serviceRegister.postUser(this.registerForm.value).forEach((user)=>
    {
      console.log(user);
      this.boolregister = true;
    });
  }
}
