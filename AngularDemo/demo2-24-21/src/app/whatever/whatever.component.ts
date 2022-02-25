import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatever',
  templateUrl: './whatever.component.html',
  styleUrls: ['./whatever.component.css']
})
export class WhateverComponent implements OnInit {
  @Input() name: string = "";
  @Input() species: string = "";
  @Input() monsters: { name: string, age: number, species: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
