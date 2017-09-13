const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
// app
var app = express();

//
app.use(express.static(publicPath));

// start app
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
