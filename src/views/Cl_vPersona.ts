import Cl_mPersona from "../models/Cl_mPersona.js";

export default class Cl_vPersona {
  lblPromedio: HTMLLabelElement;
  lblMenor: HTMLLabelElement;
  lblContPersonas: HTMLLabelElement;
  btNuevoIngreso: HTMLButtonElement;
  constructor() {
    this.btNuevoIngreso = document.getElementById(
      "body_btNuevoIngreso",
    ) as HTMLButtonElement;
    this.lblPromedio = document.getElementById(
      "body_lblPromedio",
    ) as HTMLLabelElement;
    this.lblMenor = document.getElementById(
      "body_lblMenor",
    ) as HTMLLabelElement;
    this.lblContPersonas = document.getElementById(
      "body_lblContPersonas",
    ) as HTMLLabelElement;
  }
  reportar({ persona }: { persona: Cl_mPersona }): void {
    this.lblPromedio!.innerHTML = `${persona.promedioIngresos}`;
    this.lblMenor!.innerHTML = `${persona.menorIngreso}`;
    this.lblContPersonas!.innerHTML = `${persona.contPersonas}`;
  }
}
