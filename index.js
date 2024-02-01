const app = require('./server')
const connect = require('./connect')
const controll = require("./controll")
const cors = require("cors")

app.use(cors())

app.get("/getUsers", (req, res)=>{
    controll.getUsers(req, res)
})

app.post("/addUsers", (req, res)=>{
    controll.addUsers(req, res)
})

app.post("/delUsers", (req, res)=>{
    controll.deleteUsers(req, res)
})

app.get("/findUserName", (req, res)=>{
    controll.findUserName(req, res)
})

app.post("/updateUsers" , (req, res)=>{
    controll.updateUsers(req, res)
})