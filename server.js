const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
var cors = require('cors');

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
app.use(cors({ origin: true, credentials: true }));
app.get('/', (req, res) => res.send('Hello world!'));
app.post('/login', function(req, res) {
  res.send('Login test')
  username = req.body.username;
  password = req.body.password;
  User.findOne({usernmae:username}, function(err, found){
    if (err) {
      console.log("Invalid user!");
      console.log(err);
      response.send(403);
    }
    if (found) {
      if (found.password == passwrd) {
        console.log("Login success!");
        response.send(200);
      }
      else {
        console.log("Invalid password!");
        response.send(403);
      }
    }
  })


});

const port = 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
