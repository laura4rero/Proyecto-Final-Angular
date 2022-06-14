import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent implements OnInit {

  imgRoute: string|null = '';
  cupon: number = 0;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.imgRoute = this.route.snapshot.paramMap.get('logo');
    this.cupon = Math.floor(Math.random() * 5000);

  }

}
