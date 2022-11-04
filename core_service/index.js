require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: ["*"]
};

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const db = require("./app/models");

console.log(db.url);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/user.routes")(app);


app.get('/core',(req,res) => {
    res.send("Welcome to core-service!");
});

const PORT = 7000;

app.listen(PORT,() => {
    console.log(`Server listening at port ${PORT}`);
});