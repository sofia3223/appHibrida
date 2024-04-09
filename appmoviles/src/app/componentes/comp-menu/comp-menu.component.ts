import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-comp-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './comp-menu.component.html',
  styleUrl: './comp-menu.component.css'
})
export class CompMenuComponent {

}
