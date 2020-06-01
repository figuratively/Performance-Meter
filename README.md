# Performance-Meter
This is a mini tool that can help you with testing JavaScript code performance.

## Installation
Run ```npm link path/to/cloned/repository```

## Usage
```javascript
const { PerformanceMeter } = require('performance-meter');

const m = new PerformanceMeter();

m.start('spread');
let x = {};
x = {...x, prop: Math.random()};
m.end('spread');

m.start('by array');
let y = {};
y['prop'] = Math.random();
m.end('by array');

m.start('by Object.assignProperty');
let z = {};
Object.defineProperty(z, 'prop', { value: Math.random(), writable: true });
m.end('by Object.assignProperty');

m.result();
```
