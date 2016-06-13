"use strict";

( function() {

var xhr,
	serviceFromView = {
		users: "users",
		organizations: "users",
		repositories: "repositories"
	},
	typeFromView = {
		users: "User",
		organizations: "Organization",
		repositories: undefined
	};

function always() {
	xhr = null;
	ui.listLoading( false );
}

app.search = function( q ) {
	if ( xhr ) {
		xhr.abort();
		always();
	}
	ui.listEmpty();
	app.currentSearch = q || "";
	if ( q ) {
		ui.listLoading( true );
		xhr = $.get( {
			url: "https://api.github.com/search/" + serviceFromView[ app.currentView ] + "?q=" + q,
			fail: always,
			success: function( data ) {
				lg( "success" );
				ui.listEmpty();
				data.items.forEach( function( item ) {
					if ( item.type === typeFromView[ app.currentView ] ) {
						item.name = item.login || item.full_name;
						item.imgSrc = item.avatar_url || item.owner.avatar_url;
						ui.listAppend( item );
					}
				} );
				always();
			},
		} );
	}
};

} )();
