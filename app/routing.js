"use strict";

app.routing = function() {
	var r =
	app.router = absurd.router;

	// Routes :
	r.config( { mode: "hash" } )
		.add( /repositories\/?$/, app.viewSelect.bind( null, "repositories" ) )
		.add( /organizations\/?$/, app.viewSelect.bind( null, "organizations" ) )
		.add( /users\/?$/, app.viewSelect.bind( null, "users" ) )
		.add( function() {
			r.navigate( "/users" );
		} );

	// Listen :
	// The absurd.router.listen() methode is currently using setInterval...
	// Need contribution on absurdjs for that.
	r.check();
	window.onhashchange = function() {
		r.check();
	};
};
