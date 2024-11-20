// src/app/core/text-size.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextSizeService {
  private fontSize: number = 18;
  public readonly minSize = 18;
  public readonly maxSize = 26;

  getFontSize(): number {
    return this.fontSize;
  }

  increaseFontSize(): void {
    if (this.fontSize < this.maxSize) {
      this.fontSize += 4;
    }
  }

  decreaseFontSize(): void {
    if (this.fontSize > this.minSize) {
      this.fontSize -= 4; 
    }
  }
}
