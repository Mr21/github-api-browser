#!/bin/bash

if [[ -z $1 || $1 == "html" ]]; then
	echo "Compressing HTML...";
	handlebars ui/templates -f ui/templates/precompiled.js
fi

if [[ -z $1 || $1 == "css" ]]; then
	echo "Compressing CSS...";
	sass ui/css/_make.scss ui/css/style.css;
fi

if [[ -z $1 || $1 == "js" ]]; then
	echo "Compressing JS...";
	uglifyjs                        \
		debug.js                    \
		ui/langs.js                 \
		ui/templates/precompiled.js \
		ui/_init.js                 \
		ui/search.js                \
		ui/nav.js                   \
		ui/listAppend.js            \
		ui/listEmpty.js             \
		ui/listLoading.js           \
		app/_init.js                \
		app/itemSelect.js           \
		app/viewSelect.js           \
		app/search.js               \
		app/routing.js              \
		main.js                     \
		-o compressed.js            \
		--compress                  \
		--mangle
fi
