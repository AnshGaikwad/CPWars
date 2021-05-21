require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const connectCDB = require("./config/compiler_db");
const errorHandler = require("./middleware/error");

connectDB();
connectCDB();

const { generateFile } = require("./compiler/generateFile");

const { addJobToQueue } = require("./compiler/jobQueue");
const Job = require("./models/Job");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/home", require("./routes/home"));

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;

  console.log(language, "Length:", code.length);

  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }
  // need to generate a c++ file with content from the request
  const filepath = await generateFile(language, code);
  // write into DB
  const job = await new Job({ language, filepath }).save();
  const jobId = job["_id"];
  addJobToQueue(jobId);
  res.status(201).json({ jobId });
});

app.get("/status", async (req, res) => {
  const jobId = req.query.id;

  if (jobId === undefined) {
    return res
      .status(400)
      .json({ success: false, error: "missing id query param" });
  }

  const job = await Job.findById(jobId);

  if (job === undefined) {
    return res.status(400).json({ success: false, error: "couldn't find job" });
  }

  return res.status(200).json({ success: true, job });
});


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
