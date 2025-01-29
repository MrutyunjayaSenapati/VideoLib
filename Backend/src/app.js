const express=require("express");
const cors=require("cors");
const app=express();
const port=5050;

const adminRoutes=require("./routes/adminRoutes.js");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/admin",adminRoutes);




app.listen(port,()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
});