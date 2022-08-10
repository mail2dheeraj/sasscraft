let express = require('express');
let router = express.Router();
const fs = require('fs');
router.get('/hi',(req,res)=>{


sassDb.collection("users").find({}).toArray((err,result)=>{

if(err){
res.send(err);
}else{

res.send({'result':result})
}



})


})


router.post('/lk',async (req,res)=>{
console.log(req.files);

if(req.files &&  req.files.length>0){
let query = {};
query.name = req.body.name;
query.age = req.body.age;
let file = req.files;
console.log(file[0].buffer.toString());
const fileContents = Buffer.from(file[0].buffer, 'base64');
let filesArr = [];

for(let i of file){

let pathfile = '../views/profiles/'+i.originalname;
query[`${i.fieldname}`] = pathfile; 
filesArr.push(uploadFiles(pathfile,i.buffer));

}




let ap = await Promise.all(filesArr);
sassDb.collection("users").insertOne(query,(err,results)=>{

if(err){
res.send(err);

}else{

res.send('success');

}




})


}else{

res.send('success');
}


})


function uploadFiles(filePath,filedata){
filedata = Buffer.from(filedata,'base64');
return new Promise((resolve)=>{
fs.writeFile(filePath,filedata,(err)=>{
if(err){
resolve(err);
}else{
resolve('sucess fully written');
}
});

})
}

module.exports = router;