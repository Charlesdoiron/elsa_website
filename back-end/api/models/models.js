'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: {
		type: String,
		required: 'Merci de renseigner un titre'
	},
	description: {
		type: String,
		required: 'Merci de renseigner une description'
	},
	url: {
		type: String,
		required: 'Merci de renseigner une url'
	},
	category: {
		type: Array
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [
			{
				type: String,
				enum: ['brouillon', 'publié', 'supprimé']
			}
		],
		default: ['brouillon']
	}
});

module.exports = mongoose.model('Post', postSchema);
