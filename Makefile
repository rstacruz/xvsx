PORT ?= 3000
ENV := development
bin        := ./node_modules/.bin
browserify := $(bin)/browserify -t [ babelify --stage 0 ] --extension .jsx
b_external := -x react -x classnames -x uflux
b_vendor   := -r react -r classnames -r uflux
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
	#  browserify  $@
	$(bin)/browserify $(b_vendor) | $(uglify) -m -c > $@

public/%.js: src/%.js
ifeq ($(ENV),development)
	#  browserify  $@ (dev)
	$(browserify) --debug $(b_external) $< -o $@
else
	#  browserify  $@
	$(browserify) $(b_external) $< | $(uglify) -m -c > $@
endif

.PHONY: data assets all
