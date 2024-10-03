import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  busqueda:any = '';
  @Output() cptraLetra = new EventEmitter<void>();

  enviarTextoAlPadre() {
    this.cptraLetra.emit(this.busqueda);
  }
}
