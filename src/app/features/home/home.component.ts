import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { FullscreenService } from '../../core/fullscreen.service';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../core/text-size.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, CarouselComponent, ButtonComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public textSizeService: TextSizeService, public fullscreenService: FullscreenService) {}

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  increaseText(): void {
    this.textSizeService.increaseFontSize();
  }

  decreaseText(): void {
    this.textSizeService.decreaseFontSize();
  }
}
