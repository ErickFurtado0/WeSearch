
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  template: `
    <h2>Cadastro de Paciente</h2>
    <form (ngSubmit)="cadastrar()">
      <input [(ngModel)]="paciente.nome" name="nome" placeholder="Nome" required>
      <input [(ngModel)]="paciente.telefone" name="telefone" placeholder="Telefone" required>
      <input [(ngModel)]="paciente.sexo" name="sexo" placeholder="Sexo" required>
      <input [(ngModel)]="paciente.email" name="email" placeholder="Email" required>
      <button type="submit">Cadastrar</button>
    </form>
    <ul>
      <li *ngFor="let p of pacientes">{{p.nome}} - {{p.email}}</li>
    </ul>
  `
})
export class PacienteComponent implements OnInit {
  paciente = { nome: '', telefone: '', sexo: '', email: '' };
  pacientes: any[] = [];

  constructor(private service: PacienteService) {}
  ngOnInit() { this.service.get().subscribe(p => this.pacientes = p); }
  cadastrar() {
    this.service.post(this.paciente).subscribe(() => {
      this.ngOnInit();
      this.paciente = { nome: '', telefone: '', sexo: '', email: '' };
    });
  }
}
