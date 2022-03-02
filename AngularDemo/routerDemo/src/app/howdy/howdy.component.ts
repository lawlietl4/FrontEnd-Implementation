import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-howdy',
  templateUrl: './howdy.component.html',
  styleUrls: ['./howdy.component.css']
})
export class HowdyComponent implements OnInit {
  name: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.name = params.get('name');
      console.log(this.name);
    })
  }

}
