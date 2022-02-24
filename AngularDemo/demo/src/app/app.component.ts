import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  myName = 'Bob';

  myMonsters=[
    {
      name: 'Bob',
      age: 21,
      species: 'Zombie'
    },
    {
      name: 'Suzette',
      age: 34,
      species: 'Vampire'
    },
    {
      name: 'Harry',
      age: 42,
      species: 'Werewolf'
    },
    
  ]
}
