bin        := ./node_modules/.bin
browserify := $(bin)/browserify -t [ ractivate -x .html ]
stylus     := $(bin)/stylus -u nib
uglify     := $(bin)/uglifyjs -m

all: data assets
	@echo "\033[32m✓\033[0m"

#
# data: build json from .md files
#

data: public/data.js public/data.json

public/data.json: $(shell find data -name '*.md')
	#      bundle  $@
	@node lib/bundle.js $^ > $@

public/data.js: public/data.json
	#      bundle  $@
	@(echo "window.Data=(" ; cat $^ ; echo ");") > $@

#
# assets: build via stylus/browserify
#

assets: \
	public/index.html \
	public/style.css \
	public/app.js \
	public/vendor.js

public/app.js: \
	src/app.js \
	$(shell find src -name '*.js' -or -name '*.html')

public/style.css: \
	src/style.styl \
	$(shell find src -name '*.styl')

public/%.html: src/%.html
	#        copy  $@
	@cp $< $@

public/%.css: src/%.styl
	#      stylus  $@
	@$(stylus) $< -p > $@

public/vendor.js: src/vendor.js
	#  browserify  $@
	@$(browserify) $< | $(uglify) > $@

public/%.js: src/%.js
	#  browserify  $@
	@$(browserify) $< > $@

.PHONY: data assets all
