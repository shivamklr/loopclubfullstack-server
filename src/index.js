const express = require("express");
const cors = require("cors");
const db = require("./config/mongoose");
const router = require("./routes");
//express instance
const app = express();
const PORT = process.env.PORT || 4040;

//cors middleware
app.use(cors());
//body parser
app.use(express.json());

app.use("/api", router);
app.listen(PORT, () =>
    console.log(`Listening for requests at port: http://localhost:${PORT}`)
);
