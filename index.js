var express = require("express");
var multer = require("multer");
var cors = require("cors");
require("dotenv").config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({
        error: "No file uploaded.",
      });
    }
    res.json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
