import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  private isFullscreen: boolean = false
  
  constructor() { }

  getIsFullscreen(): boolean {
    return this.isFullscreen;
  }

  setIsFullscreen(value: boolean): void {
    this.isFullscreen = value
  }
}
