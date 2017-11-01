const express = require("express");
// Initialize http server
const app = express();
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = "Time from the server is : " + dt.format('Y-m-d H:M:S');
var test = JSON.stringify({ time: formatted });
// Handle / route
// app.get('/hour', (req, res) =>
//   console.log(current_hour),
//   res.send('coucou')
// )

app.get('/hour', function (request, response) {
  console.log(formatted);
  response.json(test);
});

// Launch the server on port 3000
const server = app.listen(3001, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
