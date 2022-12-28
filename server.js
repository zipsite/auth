// import JsonDb from "./jsondb.js"
const JsonDb = require("./utils/jsondb.js")
const express = require("express")

const app = express();

app.use(express.json());

const api = require("./routes/api.js")
app.use('/api', api)

app.get('/', (req, res)=> {
    res.send("yes");
})

port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}...`));