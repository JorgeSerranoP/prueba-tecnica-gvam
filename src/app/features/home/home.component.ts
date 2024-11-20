import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarouselComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
