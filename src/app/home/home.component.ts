import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home da aplicação para testes de formulários no angular';
  constructor() { }

  ngOnInit(): void {
  }

}
