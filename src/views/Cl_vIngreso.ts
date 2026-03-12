export default class Cl_vIngreso {
  inNombre: HTMLInputElement;
  inIngreso: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("ingreso") as HTMLElement;
    this.inNombre = document.getElementById(
      "ingreso_inNombre",
    ) as HTMLInputElement;
    this.inIngreso = document.getElementById(
      "ingreso_inIngreso",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "ingreso_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "ingreso_btAceptar",
    ) as HTMLButtonElement;
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
