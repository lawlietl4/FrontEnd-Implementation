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
  sunrise: Date = new Date();
  ngOnInit(): void {
    this.getWeatherService.getData().subscribe(
      res => {
        this.weatherData = res;
        // console.log(res);
        this.date = this.weatherData.current.dt;
        var parsedDate = new Date(this.date);
        console.log(parsedDate);
      }
    )
  }

}
