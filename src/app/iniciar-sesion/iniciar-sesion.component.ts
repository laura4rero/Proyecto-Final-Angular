import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void
  {
    this.loginForm = this.formB .group(
    {
      email: new FormControl('', [Validators.minLength(2), Validators.required]),
      password: new FormControl('', [Validators.minLength(2), Validators.required]),
      rememberCheck: new FormControl(null, [Validators.required]),
      logincheck: new FormControl(null, [Validators.required])
    })
  }

  login=():void=>
  {

  }

}
