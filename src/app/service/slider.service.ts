import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  baseURL = environment.sliderURL;

constructor(private http:HttpClient) { }
 
public getAllSliders() {
  return this.http.get(this.baseURL + '/Mobile');
}

}