const express = require("express");
const https = require('https');
const fs = require('fs');
const path = require("path");

const app = express();

const CERT_PATH = path.join(__dirname, 'ca.crt');// "cert/\localhost.pem";
const KEY_PATH =  path.join(__dirname, './ca.key');//"cert/\localhost-key.pem";
console.log(KEY_PATH)
const options = {
    key: fs.readFileSync(CERT_PATH, 'utf8'),
    cert: fs.readFileSync(KEY_PATH, 'utf8'),
  };

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

const port = 8000;
//app.listen(process.env.PORT || 8000, () => console.log("Server is up and running..."));

https.createServer(options, app).listen(port, () => {
    console.log('Server listening on port ' + port);
  });