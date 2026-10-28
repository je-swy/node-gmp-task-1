import { readFile } from 'node:fs/promises';

readFile('hello.js', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Failed to read file:', err.message);
  });