"use strict";

app.viewSelect = function( view ) {
	lg( "viewSelect: " + view );
	app.currentView = view;
	ui.nav( view );
	ui.listEmpty();
	app.search( app.currentSearch );
};
