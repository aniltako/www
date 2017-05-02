module.exports = function(controller, router){
	router.route('/')
		.get(controller.get)
}