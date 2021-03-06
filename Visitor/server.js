const express = require('express');
const PORT = 1234;
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ({extended:false}));
app.use(bodyParser.json());
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI,{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
    if(err) throw err;
    console.log('MONGODB CONNECTED');
})
const home = require('./routes/visitorRoutes');
app.use('/', home);
app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`))