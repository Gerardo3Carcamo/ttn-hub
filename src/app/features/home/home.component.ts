import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    CommonModule, ButtonModule, RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
