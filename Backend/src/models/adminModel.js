class Admin{
    constructor(db){
        this.collection = db.collection('tbladmin');
    }
    async findAdmin(username){
        return await this.collection.find({username}).toArray();
    }
}
module.exports = Admin;