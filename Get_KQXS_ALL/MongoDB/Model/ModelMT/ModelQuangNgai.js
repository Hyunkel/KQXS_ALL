/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSQuangNgai_kqn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangNgai_kqvn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangNgai_xsm : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangNgai_kq24h : {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.now
    }
},{_id :false});

module.exports = mongoose.model('KQXS_QuangNgai',KQ_Schema);