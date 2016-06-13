"use strict";

( function() {

ui.jqSearchForm.submit( function() {
	app.search( ui.jqSearchInput[ 0 ].value );
	return false;
} );

} )();
