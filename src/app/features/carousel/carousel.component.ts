import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = []; 
  currentIndex: number = 0;
  currentTranslate: number = 0; 
  autoSlideInterval: any; 

  ngOnInit(): void {
    this.startAutoSlide();
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
    this.updateTranslate();
    this.restartAutoSlide();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length; 
    this.updateTranslate();
    this.restartAutoSlide();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.updateTranslate();
    this.restartAutoSlide();
  }

  updateTranslate(): void {
    this.currentTranslate = -this.currentIndex * 106.85; 
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.next(); 
    }, 5000);
  }

  restartAutoSlide(): void {
    clearInterval(this.autoSlideInterval); 
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval); 
  }
}
