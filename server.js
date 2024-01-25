const express = require("express");
const path = require("path");

const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server is up and running..."));