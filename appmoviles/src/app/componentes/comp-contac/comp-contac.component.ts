import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';

@Component({
  selector: 'app-comp-contac',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-contac.component.html',
  styleUrl: './comp-contac.component.css'
})
export class CompContacComponent {

}
