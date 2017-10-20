var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
	name: String,
	email: String,
	idNumber: String,
	courses: [{
		courseId: String,
		section: String
	}]
});

var model = mongoose.model('students', studentSchema);

module.exports = model;