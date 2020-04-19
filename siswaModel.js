//siswaModel.js
let mongoose = require('mongoose');

//setup schema
var siswaSchema = mongoose.Schema({
	create_date:{
		type:Date,
		default:Date.now
	},
	nama:{
		type:String,
		required:true
	},
	tanggallahir:{
		type:String,
		required:true
	},
	jeniskelamin:{
		type:String
	},
	hobi:{
		type:String
	}
})

//export siswaModel
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);

module.exports.get = (callback,limit)=>{
	Siswa.find(callback).limit(limit);
}
