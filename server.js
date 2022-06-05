const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
var cors = require('cors');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/blogWebsite",{useNewUrlParser: true}
    );
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
app.use(cors({ origin: true, credentials: true, methods: "GET,HEAD,PUT,PATCH,POST"}));
app.get('/', (req, res) => res.send('Hello world!'));
app.post('/login', function(req, res) {
  console.log(req.body);
  username = req.body.email;
  password = req.body.password;
  User.findOne({usernmae:username}, function(err, found){
    if (err) {
      console.log("Invalid user!");
      console.log(err);
      res.send(403);
    }
    if (found) {
      if (found.password == password) {
        console.log("Login success!");
        res.send(200);
      }
      else {
        console.log("Invalid password!");
        res.send(403);
      }
    }
  })


});

const port = 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
