import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';

@Component({
  selector: 'app-comp-servicios',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-servicios.component.html',
  styleUrl: './comp-servicios.component.css'
})
export class CompServiciosComponent {

}
