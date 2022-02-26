import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private getWeatherService: GetWeatherService) { }
  weatherData: any;
  date: any;
  sunrise: any;
  sunset:any;
  description: string="";
  wind: string="";
  feelsLike: string="";
  ngOnInit(): void {
    this.getWeatherService.getData().subscribe(
      res => {
        this.weatherData = res;
        console.log(res);
        this.date = this.weatherData.current.dt;
        var parsedDate = new Date(this.date *1000).toDateString();
        this.date=parsedDate;
        this.sunrise = new Date(this.weatherData.current.sunrise*1000).toLocaleTimeString();
        // console.log(rawSunrise);
        this.sunset = new Date(this.weatherData.current.sunset*1000).toLocaleTimeString();
        this.description = this.weatherData.current.weather[0].description;
        this.wind = `Wind speeds at: ${this.weatherData.current.wind_speed} MPH\n
Gusting up to: ${this.weatherData.current.wind_gust} MPH\n
At: ${this.weatherData.current.wind_deg} degrees`;
        this.feelsLike = this.weatherData.current.feels_like;
        // console.log(parsedDate);
      }
    )
  }
}
