"use strict";

// The global object who will deal with all the UI part of the app :
window.ui = {};

// Bring all the partials into Handlebars :
Handlebars.registerPartial( "nav", Handlebars.templates.nav );
Handlebars.registerPartial( "search", Handlebars.templates.search );
Handlebars.registerPartial( "list", Handlebars.templates.list );
Handlebars.registerPartial( "listPlaceholder", Handlebars.templates.listPlaceholder );

// Find and construct the main #app element :
ui.jqApp = $( "#app" ).append( Handlebars.templates.app( window.lang ) );

// Find all the others elements needed :
ui.jqEmpty = $();
ui.jqSearchForm = $( "#search" );
ui.jqSearchInput = $( "#search [type='text']" );
ui.jqNav = $( "nav" );
ui.jqNavLinks = $( "nav a" );
ui.jqList = $( "#list" );
