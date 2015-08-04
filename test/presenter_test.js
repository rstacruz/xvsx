/* jshint sub: true */
var expect = require('chai').expect
var present = require('../src/presenters/code_presenter')
var pluck = require('underscore').pluck

describe('Presenter:', function () {
  var data, out

  data = {
    languages: {
      'ruby': { bundle: 'programming' },
      'javascript': { bundle: 'programming' }
    },
    bundles: {
      programming: {
        outline: {
          'Variables': {
            'Defining': {},
            'Assigning': {},
            'Deleting': {}
          },
          'Classes': {
            'Constructor': {}
          },
          'Prototypes': {
            'Accessing': {}
          }
        },
        languages: {
          javascript: {
            'Variables': {
              'Defining': { code: 'var x = 2' },
              'Assigning': { code: 'x = 2' },
              'Deleting': { code: 'delete x' }
            },
            'Classes': {
              'Constructor': { code: 'function MyClass()' }
            },
            'Prototypes': {
              'Accessing': { code: 'object.prototype' }
            }
          },
          ruby: {
            'Variables': {
              'Defining': { code: 'x = 2' },
              'Assigning': { code: 'x = 2' }
            },
            'Classes': {
              'Constructor': { code: 'class MyClass' }
            }
          }
        }
      }
    }
  }

  describe('multiple languages:', function () {
    before(function () {
      out = present(data, ['javascript', 'ruby'])
    })

    xit('echo', function () {
      console.log(require('util').inspect(out, { depth: null }))
    })

    it('has .languages', function () {
      expect(pluck(out.languages, 'id')).eql(['javascript', 'ruby'])
    })

    it('has sections', function () {
      expect(out.sections).have.length.gt(0)
    })

    it('has all h2s', function () {
      expect(pluck(out.sections, 'title'))
        .eql(['Variables', 'Classes', 'Prototypes'])
    })

    it('has all h3s', function () {
      expect(pluck(out.sections[0].subsections, 'title'))
        .eql(['Defining', 'Assigning', 'Deleting'])
    })

    it('has all h3s (2)', function () {
      expect(pluck(out.sections[1].subsections, 'title'))
        .eql(['Constructor'])
    })

    it('has languages', function () {
      expect(pluck(out.sections[0].subsections[0].languages, 'language'))
        .eql(['javascript', 'ruby'])
    })

  })

  describe('one language:', function () {
    before(function () {
      out = present(data, ['ruby'])
    })

    xit('echo', function () {
      console.log(require('util').inspect(out, { depth: null }))
    })

    it('has .languages', function () {
      expect(pluck(out.languages, 'id')).eql(['ruby'])
    })

    it('removes extraneous h3s', function () {
      expect(pluck(out.sections[0].subsections, 'title'))
        .not.include('Deleting')
    })

    it('removes extraneous h2s', function () {
      expect(pluck(out.sections, 'title'))
        .not.include('Prototypes')
    })
  })
})
