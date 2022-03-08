import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.scss']
})
export class PictureOfTheDayComponent implements OnInit {
  picture: any;
  constructor(private API: APIService) { }

  ngOnInit(): void {
    this.API.getPictureOfDay().subscribe(
      res => {
        this.picture = res;
        console.log(res);
      }
    )
  }

}
