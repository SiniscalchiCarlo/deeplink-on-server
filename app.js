const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes;
app.get('/test', (req, res) => {
  res.send('test success');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
