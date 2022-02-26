import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  constructor(private getWeatherService: GetWeatherService) {}
  weatherData: any;
  returns: Array<any> = [];
  ngOnInit(): void {
    this.getWeatherService.getData().subscribe((res) => {
      this.weatherData = res;
      // console.log(res);
      for (let i = 1; i < 7; i++) {
        this.returns.push(
          {
            date: new Date(this.weatherData.daily[i].dt * 1000).toDateString(),
            weather_day: this.weatherData.daily[i].feels_like['day'],
            weather_eve: this.weatherData.daily[i].feels_like['eve'],
            weather_morn: this.weatherData.daily[i].feels_like['morn'],
            weather_night: this.weatherData.daily[i].feels_like['night'],
            conditions: this.weatherData.daily[i].weather[0].description,
            wind_dir: this.weatherData.daily[i].wind_deg,
            wind_gust: this.weatherData.daily[i].wind_gust,
            wind_speed: this.weatherData.daily[i].wind_speed,
          },
        );
      }
    });
  }
}
