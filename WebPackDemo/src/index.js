import './style.scss';

const container = document.getElementById('container');

let the_name = 'Bob';

container.innerHTML = `<h1>Hello, ${the_name}!</h1>`;

import { randomInRange, flipCoin, PI } from './module_a.js';

for (let i = 0; i < 5; i++) {
    console.log(randomInRange(50, 100));
    console.log(flipCoin());
}

console.log(PI);
console.log(Math.PI);

import * as math from './module_b';

console.log(math.add(4, 6));

import Zombie from './module_c.js';

let bob = new Zombie('bob');
bob.speak();