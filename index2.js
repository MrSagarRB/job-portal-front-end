const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const app = express();
const PORT = 3001;
const UsersModel = require("./models/Users");
const JobsModel = require("./models/Jobs");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sagar:sai@cluster0.ycrzv.mongodb.net/jobportal?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", (req, res) => {
  res.send("Job Portal API Server Running");
});

// Create user Into Database
app.post("/createNewUser", async (req, res) => {
  if (!req.body.userName) {
    res.send("Please Enter Username");
  } else {
    if (!req.body.password) {
      res.send("Please Enter Password");
    } else {
      UsersModel.findOne({ userName: req.body.userName }).then((result) => {
        if (result?.userName === req.body.userName) {
          res.send("User Alredy Register");
        } else {
          const user = new UsersModel(req.body);
          res.send("Successfully Register");
          try {
            const res = user.save();
          } catch (err) {
            console.log(err);
          }
        }
      });
    }
  }
});

// Create Job
app.post("/createJob", (req, res) => {
  const job = new JobsModel(req.body);

  res.send("Successfully Post");
  try {
    const res = job.save();
  } catch (err) {
    console.log(err);
  }
});

app.post("/userLogin", (req, res) => {
  if (!req.body.userName) {
    res.send({ msg: "Please Enter Username" });
  } else {
    if (!req.body.password) {
      res.send({ msg: "Please Enter Password" });
    } else {
      UsersModel.findOne({ userName: req.body.userName }).then((result) => {
        if (result?.password === req.body.password) {
          res.send({ msg: "User Login Success", user: result });
        } else {
          res.send({ msg: "Invalid Username or Password" });
        }
      });
    }
  }
});

app.get("/getAllUser", async (req, res) => {
  UsersModel.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/getJobList", async (req, res) => {
  JobsModel.find({}).then((result) => {
    res.send(result);
  });
});

app.delete("/delete-job/:id", (req, res) => {
  JobsModel.deleteOne({ _id: req.params.id }).then((result) => {
    res.send("Deleted");
  });
});

app.listen(PORT, () => {
  console.log(`Server is started on Port ${PORT}`);
});
