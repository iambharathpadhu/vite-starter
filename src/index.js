// import { initializeCounter } from './counter';

console.log('Hello from index.js');

// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index';

import('./counter').then(({ initializeCounter }) => initializeCounter());
