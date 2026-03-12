export default class CL_vIngreso {
    inNombre: HTMLInputElement;
    inIngreso: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    vista: HTMLElement;
    constructor() {       
        this.inNombre = document.getElementById("inNombre") as HTMLInputElement;
        this.vista = document.getElementById("articulo") as HTMLElement;
        this.inIngreso = document.getElementById("inIngreso") as HTMLInputElement;
        this.btCancelar = document.getElementById("articulo_btCancelar",) as HTMLButtonElement;
        this.btAceptar = document.getElementById("articulo_btAceptar", ) as HTMLButtonElement;
        this.mostrar();
    }

    get nombre(): string {
        return this.inNombre.value;
    }
    get ingreso(): number {
        return +this.inIngreso.value;
    }
    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
  }

    ocultar(): void {
        if (this.vista === null) return; 
        this.vista.hidden = true;
  }
}