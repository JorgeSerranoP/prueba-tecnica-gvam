import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { FullscreenService } from '../../core/fullscreen.service';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../core/text-size.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, CarouselComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public textSizeService: TextSizeService, public fullscreenService: FullscreenService) {}

  increaseText(): void {
    this.textSizeService.increaseFontSize();
  }

  decreaseText(): void {
    this.textSizeService.decreaseFontSize();
  }
}
