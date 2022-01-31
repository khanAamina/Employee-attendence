const mongoose = require('mongoose');
const { timeStamp } = require('console');
const { boolean } = require('webidl-conversions');
const Schema = mongoose.Schema;

const EmpAttendancedays= new Schema({
        Attendencedtlid : {
            type : Int(64),
            required :[true ],
            minlength:[2],
            maxlength :[120]
        },
        Attendanceid : {
            type : Int(64),
            required :[true ],
        },
        attendencedate : {
            type : Date
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
const Dat_EmpAttendancedays = mongoose.model('Dat_EmpAttendancedays', EmpAttendancedays)
module.exports = Dat_EmpAttendancedays