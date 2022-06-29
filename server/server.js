const expres = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors")

//data 
const { chats } = require("./data/data");


const app = expres();
app.use(cors())

app.get(("/"), (req, res) => {
    res.send("home api")
})

app.get('/api/chat', (req, res) => {
    res.send( chats );
});

app.get("/api/chat/:id", (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})
const port = process.env.PORT  || 5000
app.listen(5000, () => {
  console.log("server has been started" + " " + port);
});