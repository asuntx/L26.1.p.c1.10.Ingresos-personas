import Cl_mPersona from "../models/Cl_mPersona.js";
import Cl_vPersona from "../views/Cl_vPersona.js";
import Cl_cIngresos from "./Cl_cIngresos.js";
export default class Cl_cPersona {
  private mPersona: Cl_mPersona = new Cl_mPersona();
  private vPersona: Cl_vPersona = new Cl_vPersona();
  constructor() {
    this.vPersona.btNuevoIngreso.onclick = () => this.procesarIngreso();
  }
  procesarIngreso(): void {
    new Cl_cIngresos({
      callback: (ingreso) => {
        if (ingreso) {
          this.mPersona.procesarIngreso(ingreso);
          this.vPersona.reportar({ persona: this.mPersona });
        }
      },
    });
  }
}
