require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;
const summarizeText = require('./summarize.js');
app.use(cors());
// Parses JSON bodies (as sent by API clients)
app.use(express.json());
console.log(process.env.ACCESS_TOKEN);
// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', (req, res) => {
   // TODO: handle POST /summarize request
   const text = req.body.text_to_summarize;
   summarizeText(text).then(response => {
      res.send(response);
   })
      .catch(error => {
         console.log(error);
      });
});

// Start the server
app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}/`);
});
