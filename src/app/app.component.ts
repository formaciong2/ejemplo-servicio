import { Component } from '@angular/core';

import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datos;

  constructor(demoService : DemoService) {
	this.datos = JSON.parse(demoService.metodo());
  }

}
