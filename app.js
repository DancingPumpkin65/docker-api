// app.js
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 3000;

app.

app.use(bodyParser.json());
app.use('/', itemRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
