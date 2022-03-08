import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  public getPictureOfDay(){
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=hNCxQEbNyxXOf9Y5pDaRtL9wx6x83PvOr9rF30fu`);
  }
}
