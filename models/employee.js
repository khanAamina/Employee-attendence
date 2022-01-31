const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

// Employee Schema 

const EmployeeSchema = new Schema({
    Employee_id : {
        type : Number,
        required :true ,
        minlength:[2],
        maxlength :[120]
    },
    EmployeeName : {
        type : String,
        required :true ,
        minlength:[2],
        maxlength :[100]
    },
    Status:{
        default: Number
    },
});

const Mst_Emploeyee = mongoose.model('Mst_Emploeyee' ,EmployeeSchema);
module.exports = Mst_Emploeyee 