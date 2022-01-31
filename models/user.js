const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema 

const UserSchema = new Schema({
    User_id : {
        type : Number,
        required :true ,
        minlength:[2],
        maxlength :[120]
    },
    Name : {
        type : String,
        required :true ,
        minlength:[2],
        maxlength :[100]
    },
    UserName : {
        type : String,
        required :true ,
        minlength:[2],
        maxlength :[20]
    },
    password:{
        type: String,
        required:true ,
        minlength:[8],
        maxlength :[50]
    }
},
{timestamps:true}
);

const Users = mongoose.model('Users' ,UserSchema);
module.exports = Users