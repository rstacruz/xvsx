var marked = require('marked');
var files = process.argv.slice(2);

var re = work(files);
console.log(JSON.stringify(re, null, 2));

function work (files) {
  var re = {};

  files.forEach(function (file) {
    var data = require('fs').readFileSync(file, 'utf-8');
    var name = require('path').basename(file, '.md');

    re[name] = eat(data);
  });

  return re;
}

function eat (md) {
  var tokens = marked.lexer(md);
  var re = {};
  var h2, h3;

  tokens.forEach(function (t) {
    // token.type == 'heading' | 'paragraph' | 'code' | 'list_start' | 'list_item_start' | 'list_item_end'
    // token.text == '...' (paragraph, heading)
    // token.lang == 'rb' (code)
    // token.depth == 1 | 2 | 3
    //
    if (t.type === 'heading' && t.depth === 1) {
    }
    else if (t.type === 'heading' && t.depth === 2) {
      re[t.text] = {};
      h2 = re[t.text];
    } 
    else if (t.type === 'heading' && t.depth === 3) {
      h2[t.text] = { text: null, code: null };
      h3 = h2[t.text];
    }
    else if (t.type === 'code') {
      h3.code = t.text;
    }
    else if (t.type === 'paragraph') {
      if (h3.text) {
        h3.text += '\n\n' + t.text;
      } else {
        h3.text = t.text;
      }
    }
  });

  return re;
}
