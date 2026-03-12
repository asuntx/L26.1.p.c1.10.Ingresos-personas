import Cl_mIngreso from "../models/Cl_mIngreso.js";
import Cl_vIngreso from "../views/Cl_vIngreso.js";
export default class Cl_cIngresos {
  private vista = new Cl_vIngreso();
  callback: (ingreso: Cl_mIngreso | null) => void;
  constructor({
    callback,
  }: {
    callback: (ingreso: Cl_mIngreso | null) => void;
  }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }
  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  btAceptarOnClick() {
    this.callback(
      new Cl_mIngreso({
        nombre: this.vista.nombre,
        ingreso: this.vista.ingreso,
      }),
    );
    this.vista.ocultar();
  }
}
