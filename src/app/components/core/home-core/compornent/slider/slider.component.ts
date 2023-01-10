import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderService } from 'src/app/service/slider.service';

export interface SlideInterface {
  backgroundImage: string;
  description: string;
  genre: string;
  genreStatus: string;
  mainButton: string;
  subButton: string;
  title: string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnDestroy {
  title!: string;
  description!: string;
  genre!: string;
  genreStatus!: string;
  mainButton!: string;
  subButton!: string;

  buttonColor!:string;
  statusColor!:string;

  constructor(
    private sliderService: SliderService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.loadSliderData();
    this.resetTimer();
  }

  loadSliderData() {
    const resp = this.sliderService.getAllSliders();

    resp.subscribe((data: any) => {
      data.data.map((slide: SlideInterface) => {
        console.log(slide);
        this.slides.push(slide);
        this.title = slide.title;
        this.description=slide.description;
        this.genre=slide.genre;
        this.genreStatus=slide.genreStatus;
        this.mainButton=slide.mainButton;
        this.subButton=slide.subButton;
      });
    });
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

    if(this.slides[this.currentIndex].genreStatus=="Live"){
      this.buttonColor=this.statusColor="background-color:red";
     
  }else{
    this.buttonColor="background-color:#0099a5";
    this.statusColor="background-color:grey";
  }
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;

    this.title = this.slides[this.currentIndex].title;
    this.description = this.slides[this.currentIndex].description;
    this.genre=this.slides[this.currentIndex].genre;
    this.genreStatus=this.slides[this.currentIndex].genreStatus;
    this.mainButton=this.slides[this.currentIndex].mainButton;
    this.subButton=this.slides[this.currentIndex].subButton;

    if(this.slides[this.currentIndex].genreStatus=="Live"){
        this.buttonColor=this.statusColor="background-color:red";
       
    }else{
      this.buttonColor="background-color:#0099a5";
      this.statusColor="background-color:grey";
    }
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].backgroundImage}')`;
  }
}