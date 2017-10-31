export class Elemento {
	id: number;
	descripcion: string;
	precio: number;
	cantidad: number;
	importe: number;

	constructor(id, descripcion, precio, cantidad, importe) {
		this.id = id;
		this.descripcion = descripcion;
		this.precio = precio;
		this.cantidad = cantidad;
		this.importe = importe;
	}
}
