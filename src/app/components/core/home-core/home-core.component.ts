import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-home-core',
  templateUrl: './home-core.component.html',
  styleUrls: ['./home-core.component.scss']
})
export class HomeCoreComponent implements OnInit {

  constructor(private sliderService:SliderService) { }

  ngOnInit() {
    
  }


}
