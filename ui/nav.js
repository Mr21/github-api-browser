"use strict";

ui.nav = function() {
	var oldLink = ui.jqEmpty;

	return function( str ) {
		oldLink.removeClass( "selected" );
		oldLink = ui.jqNav.find( "[href='#/" + str + "']" ).addClass( "selected" );
		ui.jqSearchInput.attr( "placeholder", lang.search.placeholder[ str ] )
	};
}();
