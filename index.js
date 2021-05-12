const express = require("express");

//express instance
const app = express();
const PORT = process.env.PORT || 4040;

//body parser
app.use(express.json());
app.use("/", (req, res) => res.json({ message: "hello" }));
app.listen(PORT,()=>console.log(`Listening for requests at port: http://localhost:${PORT}`));
