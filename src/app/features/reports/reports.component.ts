import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import { TooltipModule } from "primeng/tooltip";
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CardComponent,
    ButtonModule,
    TableModule,
    TooltipModule,
    CommonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule
],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  gpsData = [
    {
      carro: 'TTN-001',
      conductor: 'Juan Pérez',
      ultimaActualizacion: '2025-11-25T21:15:00',
      gasolina: '2025-11-25T21:15:00',
      litros: '20L'
    },
    {
      carro: 'TTN-002',
      conductor: 'María López',
      ultimaActualizacion: '2025-11-25T21:12:30',
      gasolina: '2025-11-25T21:12:30',
      litros: '20L'
    },
    {
      carro: 'TTN-003',
      conductor: 'Carlos Ruiz',
      ultimaActualizacion: '2025-11-25T21:10:05',
      gasolina: '2025-11-25T21:10:05',
      litros: '20L'
    }
  ]

}
