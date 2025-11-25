import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  providers: [NavigateService],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  constructor(private navigate: NavigateService){}

  @Output() onMenuClick: EventEmitter<void> = new EventEmitter<void>();

  doLogin(){
    this.navigate.navigate('/auth');
  }

}
