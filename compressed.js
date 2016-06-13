"use strict";function lg(){return console.log.apply(console,arguments)}window.languages={fr:{app:{title:"<i class='fa fa-github'></i> API - jQuery MVC"},nav:{users:"Users",repositories:"Repositories",organizations:"Organizations"},search:{placeholder:{users:"Search an amazing developers...",repositories:"Search a great project to contribute...",organizations:"Search a good team to join..."}}}},window.lang=languages.fr,function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.app=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){var t;return'<!-- #app -->\r\n<header id="header">\r\n	<h1>'+(null!=(t=a.lambda(null!=(t=null!=e?e.app:e)?t.title:t,e))?t:"")+"</h1>\r\n"+(null!=(t=a.invokePartial(r.nav,e,{name:"nav",data:i,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?t:"")+(null!=(t=a.invokePartial(r.search,e,{name:"search",data:i,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?t:"")+"</header>\r\n"+(null!=(t=a.invokePartial(r.list,e,{name:"list",data:i,helpers:n,partials:r,decorators:a.decorators}))?t:"")},usePartial:!0,useData:!0}),e.list=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){var t;return'<div id="list">\r\n'+(null!=(t=a.invokePartial(r.listPlaceholder,e,{name:"listPlaceholder",data:i,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?t:"")+"</div>\r\n"},usePartial:!0,useData:!0}),e.listItem=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){var t,s=null!=e?e:{},l=n.helperMissing,o="function",u=a.escapeExpression;return'<a href="'+u((t=null!=(t=n.html_url||(null!=e?e.html_url:e))?t:l,typeof t===o?t.call(s,{name:"html_url",hash:{},data:i}):t))+'" class="item '+u((t=null!=(t=n.type||(null!=e?e.type:e))?t:l,typeof t===o?t.call(s,{name:"type",hash:{},data:i}):t))+'">\r\n	<img class="avatar loading" src="'+u((t=null!=(t=n.imgSrc||(null!=e?e.imgSrc:e))?t:l,typeof t===o?t.call(s,{name:"imgSrc",hash:{},data:i}):t))+'"/>\r\n	<span class="name">'+u((t=null!=(t=n.name||(null!=e?e.name:e))?t:l,typeof t===o?t.call(s,{name:"name",hash:{},data:i}):t))+"</span>\r\n</a>\r\n"},useData:!0}),e.listPlaceholder=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){return'<div class="placeholder">\r\n	<img class="loading" src="ui/css/loading.gif"/>\r\n	<i class="fa fa-github"></i>\r\n</div>\r\n'},useData:!0}),e.nav=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){var t,s=a.lambda,l=a.escapeExpression;return'<nav>\r\n	<a href="#/users">\r\n		<i class="fa fa-user"></i>\r\n		<span>'+l(s(null!=(t=null!=e?e.nav:e)?t.users:t,e))+'</span>\r\n	</a><a href="#/organizations">\r\n		<i class="fa fa-users"></i>\r\n		<span>'+l(s(null!=(t=null!=e?e.nav:e)?t.organizations:t,e))+'</span>\r\n	</a><a href="#/repositories">\r\n		<i class="fa fa-code-fork"></i>\r\n		<span>'+l(s(null!=(t=null!=e?e.nav:e)?t.repositories:t,e))+"</span>\r\n	</a>\r\n</nav>\r\n"},useData:!0}),e.search=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,r,i){return'<form id="search">\r\n	<input type="text" placeholder="Search..."/>\r\n	<input type="submit"/>\r\n</form>\r\n'},useData:!0})}(),window.ui={},Handlebars.registerPartial("nav",Handlebars.templates.nav),Handlebars.registerPartial("search",Handlebars.templates.search),Handlebars.registerPartial("list",Handlebars.templates.list),Handlebars.registerPartial("listPlaceholder",Handlebars.templates.listPlaceholder),ui.jqApp=$("#app").append(Handlebars.templates.app(window.lang)),ui.jqEmpty=$(),ui.jqSearchForm=$("#search"),ui.jqSearchInput=$("#search [type='text']"),ui.jqNav=$("nav"),ui.jqNavLinks=$("nav a"),ui.jqList=$("#list"),function(){ui.jqSearchForm.submit(function(){return app.search(ui.jqSearchInput[0].value),!1})}(),ui.nav=function(){var a=ui.jqEmpty;return function(e){a.removeClass("selected"),a=ui.jqNav.find("[href='#/"+e+"']").addClass("selected"),ui.jqSearchInput.attr("placeholder",lang.search.placeholder[e])}}(),ui.listAppend=function(a){a.jqItem=$(Handlebars.templates.listItem(a)).appendTo(ui.jqList).click(app.itemSelect.bind(null,a));var e=a.jqItem.find(".avatar");e[0].onload=function(){e.removeClass("loading")}},ui.listEmpty=function(){ui.jqList.find(".item").remove()},ui.listLoading=function(a){ui.jqList.toggleClass("loading",a)},window.app={init:function(){app.routing()}},app.itemSelect=function(a){lg("itemSelect: "+a),app.currentItem=a},app.viewSelect=function(a){lg("viewSelect: "+a),app.currentView=a,ui.nav(a),ui.listEmpty(),app.search(app.currentSearch)},function(){function a(){e=null,ui.listLoading(!1)}var e,n={users:"users",organizations:"users",repositories:"repositories"},r={users:"User",organizations:"Organization",repositories:void 0};app.search=function(i){e&&(e.abort(),a()),ui.listEmpty(),app.currentSearch=i||"",i&&(ui.listLoading(!0),e=$.get({url:"https://api.github.com/search/"+n[app.currentView]+"?q="+i,fail:a,success:function(e){lg("success"),ui.listEmpty(),e.items.forEach(function(a){a.type===r[app.currentView]&&(a.name=a.login||a.full_name,a.imgSrc=a.avatar_url||a.owner.avatar_url,ui.listAppend(a))}),a()}}))}}(),app.routing=function(){var a=app.router=absurd.router;a.config({mode:"hash"}).add(/repositories\/?$/,app.viewSelect.bind(null,"repositories")).add(/organizations\/?$/,app.viewSelect.bind(null,"organizations")).add(/users\/?$/,app.viewSelect.bind(null,"users")).add(function(){a.navigate("/users")}),a.check(),window.onhashchange=function(){a.check()}},app.init();