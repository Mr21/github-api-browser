(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- #app -->\r\n<header id=\"header\">\r\n	<h1>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\r\n"
    + ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.search,depth0,{"name":"search","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>\r\n"
    + ((stack1 = container.invokePartial(partials.list,depth0,{"name":"list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['list'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"list\">\r\n"
    + ((stack1 = container.invokePartial(partials.listPlaceholder,depth0,{"name":"listPlaceholder","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});
templates['listItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\" class=\"item "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n	<img class=\"avatar loading\" src=\""
    + alias4(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\"/>\r\n	<span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\r\n</a>\r\n";
},"useData":true});
templates['listPlaceholder'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"placeholder\">\r\n	<img class=\"loading\" src=\"ui/css/loading.gif\"/>\r\n	<i class=\"fa fa-github\"></i>\r\n</div>\r\n";
},"useData":true});
templates['nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<nav>\r\n	<a href=\"#/users\">\r\n		<i class=\"fa fa-user\"></i>\r\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nav : depth0)) != null ? stack1.users : stack1), depth0))
    + "</span>\r\n	</a><a href=\"#/organizations\">\r\n		<i class=\"fa fa-users\"></i>\r\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nav : depth0)) != null ? stack1.organizations : stack1), depth0))
    + "</span>\r\n	</a><a href=\"#/repositories\">\r\n		<i class=\"fa fa-code-fork\"></i>\r\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nav : depth0)) != null ? stack1.repositories : stack1), depth0))
    + "</span>\r\n	</a>\r\n</nav>\r\n";
},"useData":true});
templates['search'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form id=\"search\">\r\n	<input type=\"text\" placeholder=\"Search...\"/>\r\n	<input type=\"submit\"/>\r\n</form>\r\n";
},"useData":true});
})();