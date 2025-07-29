let express = require("express");
let cors = require("cors");
let mysql2 = require("mysql2");
let port = 5000;
let app = express();
app.use(cors());
let db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mkce",
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
