import Cl_mIngreso from "./Cl_mIngreso.js";
export default class Cl_mPersona {
  private acIngresos: number;
  private conPersona: number;
  private menor: number;

  constructor() {
    this.acIngresos = 0;
    this.conPersona = 0;
    this.menor = 0;
  }

  procesarIngreso(ing: Cl_mIngreso): void {
    this.conPersona++;
    this.acIngresos += ing.ingreso;
    if (this.conPersona === 1) {
      this.menor = ing.ingreso;
    } else if (ing.ingreso < this.menor) {
      this.menor = ing.ingreso;
    }
  }

  get promedioIngresos(): number {
    if (this.conPersona > 0) {
      return this.acIngresos / this.conPersona;
    }
    return 0;
  }
  get menorIngreso(): number {
    return this.menor;
  }
  get contPersonas(): number {
    return this.conPersona;
  }
}
