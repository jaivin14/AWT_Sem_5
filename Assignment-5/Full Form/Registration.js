const express = require("express");
const bodyParser = require("body-parser")

const hostname = '127.0.0.1';
const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Registration.html");
})
app.post("/display", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var pswd = req.body.pass;
    var PhonNo = req.body.phone;
    var gender = req.body.gender;
    var state = req.body.state;
    var hobbies = req.body.hobbies;
    res.send(`<h3>Name is : ${name}<h3/>
    <h3>Email : ${email}<h3/>
    <h3>Password : ${pswd}<h3/>
    <h3>Contect no. : ${PhonNo}<h3/>
    <h3>Gender : ${gender}<h3/>
    <h3>State : ${state}<h3/>
    <h3>Hobbies : ${hobbies}<h3/>`);
});

app.listen(4000, function () {
    console.log(`server is running on http://${hostname}:${port}/`);
})