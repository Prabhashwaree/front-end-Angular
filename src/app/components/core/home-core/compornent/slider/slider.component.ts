import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';


export interface SlideInterface {
  url: string;
  title: string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnDestroy {
  constructor() { }
  
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  @Input() slides: SlideInterface[] = [
    { url: '/assets/BlackAdamCover.png', title: 'beach' },
    { url: '/assets/TheWalkingDeadCover.png', title: 'boat' },
    { url: '/assets/LiveStreamingThumbnail.png', title: 'forest' },
    
  ];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  

}
