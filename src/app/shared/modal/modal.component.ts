import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal desde fuera

  // Método para cerrar el modal
  closeModal(): void {
    this.close.emit(); // Emitimos el evento para cerrar el modal
  }

  // Evitar la propagación del evento click para que no cierre el modal al hacer clic dentro de él
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
