import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showSmallNavbar = false;

  constructor() { }

  toggleSmallNavbar(): void {
    this.showSmallNavbar = !this.showSmallNavbar;
  }
}
