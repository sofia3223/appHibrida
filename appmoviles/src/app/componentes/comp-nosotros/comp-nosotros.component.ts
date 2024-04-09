import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CompMenuComponent } from '../comp-menu/comp-menu.component';

@Component({
  selector: 'app-comp-nosotros',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CompMenuComponent],
  templateUrl: './comp-nosotros.component.html',
  styleUrl: './comp-nosotros.component.css'
})
export class CompNosotrosComponent {

}
