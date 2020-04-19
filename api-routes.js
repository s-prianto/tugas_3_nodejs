//api router.js
//initialize express router
let router = require('express').Router();

//set default API response
router.get('/',(req,res)=>{
	res.json({
		status:'API is working',
		message:'Welcome to Siswa - API'
	});
});

//import siswa  from siswaController
let siswaController = require('./siswaController');

router.route('/siswa_1')
.get(siswaController.index)
.post(siswaController.new);

router.route('/siswa_1/:siswa_id')
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update);

module.exports = router;
