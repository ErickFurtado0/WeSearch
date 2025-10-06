
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente.component';
import { PacienteService } from './paciente.service';

@NgModule({
  declarations: [AppComponent, PacienteComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
