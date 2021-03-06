PORT ?= 3000
NODE_ENV := development
bin        := ./node_modules/.bin
b_options  := -t [ babelify --stage 0 ] --extension .jsx
b_external := -x react -x classnames -x uflux -x lodash
b_vendor   := -r react -r classnames -r uflux -r lodash
stylus     := $(bin)/stylus -u nib
uglify     := $(bin)/uglifyjs

all: data assets
	@echo "\033[32m✓\033[0m"

watch:
	mkdir -p public
	${bin}/multiexec \
		"${bin}/watch make src" \
		"cd public && ../${bin}/browser-sync start --server --files='*' --port=${PORT}"

#
# data: build json from .md files
#

data: public/data.js public/data.json

public/data.json: $(shell find data -name '*.md')
	#      bundle  $@
	@mkdir -p public
	@${bin}/babel-node lib/bundle.js $^ > $@

public/data.js: public/data.json
	#      bundle  $@
	@mkdir -p public
	@(echo "window.Data=(" ; cat $^ ; echo ");") > $@

#
# assets: build via stylus/browserify
#

assets: \
	public/index.html \
	public/index-nonroot.html \
	public/style.css \
	public/app.js \
	public/vendor.js

public/app.js: \
	src/app.js \
	$(shell find src -name '*.js' -or -name '*.jsx')

public/style.css: \
	src/style.styl \
	$(shell find src -name '*.styl')

public/%.html: src/%.html
	#        copy  $@
	@cp $< $@

public/%.css: src/%.styl
	#      stylus  $@
	@$(stylus) $< -p > $@

public/vendor.js: Makefile
ifeq ($(NODE_ENV),development)
	#  browserify  $@ (dev)
	$(bin)/browserify $(b_vendor) -o $@
else
	#  browserify  $@
	$(bin)/browserify $(b_vendor) | $(uglify) -m -c > $@
endif

public/%.js: src/%.js
ifeq ($(NODE_ENV),development)
	#  browserify  $@ (dev)
	$(bin)/browserify $(b_options) --debug $(b_external) $< -o $@
else
	#  browserify  $@
	$(bin)/browserify $(b_options) $(b_external) $< | $(uglify) -m -c > $@
endif

.PHONY: data assets all
