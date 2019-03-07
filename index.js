require('dotenv').config(); // add this line as the first thing to run1

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
