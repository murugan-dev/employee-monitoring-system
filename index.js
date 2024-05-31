const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'user')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login", "index.htm"));
});

app.get("/admin",(req, res)=>{
    res.sendFile(path.join(__dirname, "user",  "app.html"));
})

app.listen(9900, (err) => {
    if (err) throw err;
    console.log("Server is running....");
});
