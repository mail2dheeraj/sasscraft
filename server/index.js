let express = require('express');
let mongoDbConnection  = require('./dataBaseConnection')
const cors = require('cors')
let apiroutes = require('./routes');
const multer  = require('multer')
var bodyParser = require('body-parser')
let app = express();
// app.use(multer());
const upload = multer()

var fileupload = require("express-fileupload");
app.use(cors());

app.use(upload.any());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/',apiroutes)
// app.post('/lk',(req,res)=>{
// console.log(req.files);
// res.send('updated');
// })
mongoDbConnection((client)=>{
 sassDb =   client.db('sassTest');
app.listen(8081,()=>{
console.log("listining at 8081")
})
})


