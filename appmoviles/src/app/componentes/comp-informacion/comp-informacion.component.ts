import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';

@Component({
  selector: 'app-comp-informacion',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-informacion.component.html',
  styleUrl: './comp-informacion.component.css'
})
export class CompInformacionComponent {

}
