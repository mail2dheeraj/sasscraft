const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let createDataBaseConnection  = (cb)=>{

MongoClient.connect('mongodb+srv://dheeraj:dheeraj@sasstest.hci0gqx.mongodb.net/?retryWrites=true&w=majority').then((result)=>{

// console.log("connected",result);

cb(result);

}).catch((e)=>{

console.log(e);
})

}



module.exports = createDataBaseConnection;