import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { Router, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar'
import { Page } from '../../interfaces/Page';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TopbarComponent,
    RouterOutlet,
    SidebarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private router: Router){}

  pages: Page[] = [
    {
      Path: '/reports',
      Icon: 'pi-file-excel',
      Title: 'Reportes'
    },
    {
      Path: '',
      Icon: 'pi-money-bill',
      Title: 'Nominas'
    }
  ];
  showMenu: boolean = false;

  toggleMenu = () => this.showMenu = !this.showMenu;
  navigate(path: string){
    this.router.navigate([path])
  }

}
