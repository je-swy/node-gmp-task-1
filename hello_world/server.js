// server.js
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

console.log(`Starting in ${env} mode on port ${port}`);

// You can set variables inline when running a script:

// PORT=8080 NODE_ENV=production node server.js
// # Starting in production mode on port 8080