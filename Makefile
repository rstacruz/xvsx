programming_files := $(wildcard data/programming/*.md)

data/programming.json: $(programming_files)
	node lib/bundle.js $^ > $@

.PHONY: data/programming.json
