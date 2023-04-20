import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss']
})
export class NavbarSearchComponent {

  fullNameSearch: string;

  @Output() searchProfilesEvent = new EventEmitter<string>();

  searchProfilesByFullName(fullName: string): void {
    this.searchProfilesEvent.emit(fullName);
  }

}
