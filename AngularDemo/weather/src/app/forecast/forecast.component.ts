import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private getWeatherService: GetWeatherService) { }
  weatherData: any;
  ngOnInit(): void {
    this.getWeatherService.getData().subscribe(
      res => {
        this.weatherData = res;
        console.log(res);
      }
    )
  }

}
