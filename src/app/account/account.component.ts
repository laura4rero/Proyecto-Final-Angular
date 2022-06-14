import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrarCupon=(event: Event):void=>
  {
    let logo = event.target as HTMLInputElement;
    this.router.navigate(['/cupones', {'logo': logo.src}])
  }
}
