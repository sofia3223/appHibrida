import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';

@Component({
  selector: 'app-comp-precios',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-precios.component.html',
  styleUrl: './comp-precios.component.css'
})
export class CompPreciosComponent {

}
