import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apodUrl = `https://api.nasa.gov/planetary/apod?api_key=hNCxQEbNyxXOf9Y5pDaRtL9wx6x83PvOr9rF30fu`;
  private earthUrl = `https://api.nasa.gov/planetary/earth?api_key=hNCxQEbNyxXOf9Y5pDaRtL9wx6x83PvOr9rF30fu`
  constructor(private http: HttpClient) { }
  public getApodData(){
    return this.http.get(this.apodUrl);
  }
}
