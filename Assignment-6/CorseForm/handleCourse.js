const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/courseForm.html");
});

app.post("/done", function(req, res) {
    var cCode = req.body.cCode;
    var cName = req.body.cName;
      
    res.send("<p>Course code is : </p>" + 
    cCode + "<p>Course Name is : </p>" + cName + 
    "<p>Course Semester is : </p>" + req.body.cSem +
    "<p>Course Institute is : </p>" + req.body.cInst);
  });

  const port = 3000
  app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
  })
