const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

// Terminal Message for port
app.listen(port, () => console.log(`Listening on port ${port}`));

// Routes
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});