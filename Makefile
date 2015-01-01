browserify := ./node_modules/.bin/browserify
programming_files := $(wildcard data/programming/*.md)
asset_files := $(patsubst src/%, public/%, $(wildcard src/*))

all: data assets

data: public/programming.json
public/programming.json: $(programming_files)
public/%.json:
	#    bundling  $@
	@mkdir -p public
	@node lib/bundle.js $^ > $@

assets: public/app.js $(asset_files)
public/%.html: src/%.html
	#        copy  $@
	@mkdir -p public
	@cp $^ $@
public/%.js: lib/%.js
	#  browserify  $@
	@mkdir -p public
	@$(browserify) $^ > $@

.PHONY: data assets
