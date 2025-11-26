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

  images: string[] = [
    'assets/socios/abc.png',
    'assets/socios/acero.png',
    'assets/socios/borg.png',
    'assets/socios/lenox.png',
    'assets/socios/mahle.png',
    'assets/socios/tupy.png',
    'assets/socios/tupy_sal.png',
    'assets/socios/zf.png',
  ];

}
