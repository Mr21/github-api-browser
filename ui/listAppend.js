"use strict";

ui.listAppend = function( item ) {
	item.jqItem = $( Handlebars.templates.listItem( item ) )
		.appendTo( ui.jqList )
		.click( app.itemSelect.bind( null, item ) );

	var jqImg = item.jqItem.find( ".avatar" );
	jqImg[ 0 ].onload = function() {
		jqImg.removeClass( "loading" );
	};
};
