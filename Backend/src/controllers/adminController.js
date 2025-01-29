
const Admin = require('../models/adminModel');
const loginAdmin=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const adminModel = new Admin(req.db);
        const admin = await adminModel.findAdmin(username);
        if(!admin){
            return res.status(400).json({message:"Admin not found"});
        }
        if(admin.password!==password){
            return res.status(400).json({message:"Invalid password"});
        }
        res.status(200).json({message:"Login successful"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
    }
    module.exports = {loginAdmin};