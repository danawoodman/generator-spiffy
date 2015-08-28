'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('spiffy:app', function () {
  context('NPM module', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({ 'skip-install': true })
        .withPrompt({
          appname: 'test-app',
          description: 'Some description...',
          name: 'John Smith',
          username: 'jsmith',
          projectType: 'NPM module',
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'package.json',
        '.editorconfig',
        '.gitignore',
        '.travis.yml',
        'readme.md',
        'license',
        '.nvmrc',
        '.eslintrc',
        '.eslintignore',
        'test/mocha.opts',
        'test/helper.js',
        'test/index-test.js',
        'src/index.js',
      ]);
    });
  })
});
