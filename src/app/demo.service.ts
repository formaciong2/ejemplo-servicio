import { Injectable } from '@angular/core';

import { Elemento } from './elemento';

@Injectable()
export class DemoService {

  constructor() { }
  
  metodo() {
	// Generar JSON demo.
	var datos: Elemento[] = [];
	datos.push(new Elemento(1, "Elemento 1", 1, 1, 1));
	datos.push(new Elemento(2, "Elemento 2", 5, 2, 10));
	datos.push(new Elemento(3, "Elemento 2", 10, 14, 140));
	datos.push(new Elemento(4, "Elemento 2", 20, 5, 100));
	
	return JSON.stringify(datos);
  }

}
