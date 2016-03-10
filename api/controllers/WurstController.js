/**
 * WurstController
 *
 * @description :: Server-side logic for managing wursts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
create: function(req,res) {

var name='Lecker '+req.param('name');
Wurst.create({name:name,fat:req.param.fat}).exec(function(err, item){
if(err) {
	return res.serverError(); 
}
return res.ok(item);
});
}	

};

