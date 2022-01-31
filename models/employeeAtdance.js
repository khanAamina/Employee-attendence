const mongoose = require('mongoose');
const { timeStamp } = require('console');
const { boolean } = require('webidl-conversions');
const Schema = mongoose.Schema;

const EmpAttendance= new Schema(
    {
        EmployeeID : {
            type : Int(64),
            required :[true ],
            minlength:[2],
            maxlength :[120]
        },
        TotalDays : {
            type : Int(64),
            required :[true ],
        },
        TotalPresent : {
            type : Int(64),
            required :[true ],
        },
        TotalAbsent : {
            type : Int(64),
            required :[true ],
        },
        isActive:{
            type: boolean,
            default:true
        },
        isDeleted:{
            type: Boolean,
            default:false
        }    
    },
    {
        timestamps:true  
    }
);
const Dat_EmpAttendance = mongoose.model('Dat_EmpAttendance', EmpAttendance);
module.exports = Dat_EmpAttendance