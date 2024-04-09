import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';


@Component({
  selector: 'app-comp-inicio',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-inicio.component.html',
  styleUrl: './comp-inicio.component.css'
})
export class CompInicioComponent {

}
