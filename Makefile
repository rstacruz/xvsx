browserify_bin := ./node_modules/.bin/browserify
browserify := $(browserify_bin) -t [ ractivate -x .html ]

stylus_bin := ./node_modules/.bin/stylus
stylus := $(stylus_bin) -u nib

uglify_bin := ./node_modules/.bin/uglifyjs
uglify := $(uglify_bin) -m

programming_files := $(wildcard data/programming/*.md)

all: data assets
	@echo "OK"

data: public/programming.json
public/programming.json: $(programming_files)
public/%.json:
	#    bundling  $@
	@mkdir -p public
	@node lib/bundle.js $^ > $@

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
	@mkdir -p public
	@cp $< $@

public/%.css: src/%.styl
	#      stylus  $@
	@mkdir -p public
	@$(stylus) $< -p > $@

public/%.js: src/%.js
	#  browserify  $@
	@mkdir -p public
	@$(browserify) $< | $(uglify) > $@

.PHONY: data assets all
