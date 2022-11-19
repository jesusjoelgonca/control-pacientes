export class MotivoModel {
  id: any;
  motivo_consulta: any;
  enfermedad_actual: any;
  antecedentes_enfermedad_ac: any;
  antecedentes_familiares: any;
  fecha_consulta: any;
  paciente_id: any;

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setFechaConsulta(fecha_consulta: any) {
    this.fecha_consulta = fecha_consulta;
  }
  getFechaConsulta(): any {
    return this.fecha_consulta;
  }

  setAntecedentesFamiliares(antecedentes_familiares: string) {
    this.antecedentes_familiares = antecedentes_familiares;
  }
  getAntecedentesFamiliares(): string {
    return this.antecedentes_familiares;
  }

  setAntecedentesEnfermedadAc(antecedentes_enfermedad_ac: string) {
    this.antecedentes_enfermedad_ac = antecedentes_enfermedad_ac;
  }
  getAntecedentesEnfermedadAc(): string {
    return this.antecedentes_enfermedad_ac;
  }

  setEnfermedadActual(enfermedad_actual: string) {
    this.enfermedad_actual = enfermedad_actual;
  }
  getEnfermedadActual(): string {
    return this.enfermedad_actual;
  }

  setMotivoConsulta(motivo_consulta: string) {
    this.motivo_consulta = motivo_consulta;
  }
  getMotivoConsulta(): string {
    return this.motivo_consulta;
  }

  setIdPaciente(paciente_id: number) {
    this.paciente_id = paciente_id;
  }

  getIdPaciente(): number {
    return this.paciente_id;
  }
}
