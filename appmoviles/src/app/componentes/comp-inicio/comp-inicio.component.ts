import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-comp-inicio',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './comp-inicio.component.html',
  styleUrl: './comp-inicio.component.css'
})
export class CompInicioComponent {

}
