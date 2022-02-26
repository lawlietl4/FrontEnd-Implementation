import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  private APIkey='ef75eadb610c07d427e235a1d2e77b41';
  private lon = '-111.876183';
  private lat = '40.758701';
  private url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&appid=${this.APIkey}&units=imperial`;

  constructor(private http: HttpClient) { }
  public getData(){
    return this.http.get(this.url);
  }
}
