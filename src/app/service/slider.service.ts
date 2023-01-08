import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  baseURL = environment.sliderUrl;

constructor(private http:HttpClient) { }
 
public getAllParentMenu() {
  return this.http.get(this.baseURL + '/Mobile');
}

}