'use strict';
module.exports = function(app) {
	var blog = require('../controllers/controllers.js');
	app
		.route('/posts')
		.get(blog.list_all_posts)
		.post(blog.create_a_post);

	app
		.route('posts/:postId')
		.get(blog.read_a_post)
		.put(blog.update_a_post)
		.delete(blog.delete_a_post);
};
