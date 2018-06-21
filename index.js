const express = require('express');
require('./services/passport.js');
const keys = require('./config/keys.js');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI);
const app = express();
require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
