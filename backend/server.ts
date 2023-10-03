const express = require("express");
const app = express();
//const router = express.Router() 


const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/cities',require('./routes/cities'));

app.listen(port, () => {
  console.log("Server is running on " + port);
});

