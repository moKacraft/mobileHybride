const express = require("express");
// Initialize http server
const app = express();
var dateTime = require('node-datetime');
// Handle / route
// app.get('/hour', (req, res) =>
//   console.log(current_hour),
//   res.send('coucou')
// )

app.get('/hour', function (request, response) {
	var dt = dateTime.create();
	var formatted = "Time from the server is : " + dt.format('Y-m-d H:M:S');
	var test = JSON.stringify({ time: formatted });
  console.log(formatted);
  response.json(formatted);
});

app.get('/action/:id', function (request, response) {
  console.log(request.params.id);
	var toto = request.params.id;
	response.json(toto);
});

// Launch the server on port 3000
const server = app.listen(process.env.PORT || 5000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
