const mongoClient=require("mongodb").MongoClient;
const express=require("express");
const cors=require("cors");
var conString="mongodb://127.0.0.1:27017";

const app=express();
app.use(cors());
port=5050;
app.use(express.urlencoded({extended:true}));

app.get('/get-admin',(req,res)=>{
   mongoClient.connect(conString).then(conObj=>{
    let database=conObj.db("videodb");
    database.collection("tbladmin").find({}).toArray().then(documents=>{
        res.send(documents);
        res.end();
    });
   });
});

app.get("/get-videos",(req,res)=>{
    mongoClient.connect(conString).then(conObj=>{
        let database=conObj.db("videodb");
        database.collection("tblvideos").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
}),
app.get("/get-categories",(req,res)=>{
    mongoClient.connect(conString).then(conObj=>{
        let database=conObj.db("videodb");
        database.collection("tblcategories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})


app.listen(port,()=>{
    console.log(`Server running on http://127.0.0.1:${port}`);
})
