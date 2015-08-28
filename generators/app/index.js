var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var camelCase = require('camelcase')
var yosay = require('yosay')
var ejs = require('ejs')

var NODE_MODULE_CHOICE = 'NPM module'

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json')
    this.engine = ejs.render
  },

  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Howdy! Welcome to the badass ' + chalk.red('Spiffy') + ' generator!'
    ))

    var prompts = [
      {
        type: 'list',
        name: 'projectType',
        message: 'What kind of project is this?',
        choices: [
          NODE_MODULE_CHOICE,
          'Web application (React, WebPack, etc...)',
        ],
        default: 0,
      },
      {
        name: 'appname',
        message: 'What\'s the name of the project?',
        default: 'spiffy-app'
        // TODO: Slugify name...
      },
      {
        name: 'description',
        message: 'What is your project description?',
      },
      {
        name: 'name',
        message: 'What is your full name or company?',
      },
      {
        name: 'username',
        message: 'What is your Github username (or organization)?',
      },
      {
        name: 'karma',
        message: 'Do you you need Karma?',
        default: false,
      },
    ]

    this.prompt(prompts, function (props) {
      this.props = props

      this.props.isNpmModule = props.projectType === NODE_MODULE_CHOICE
      this.props.camelAppName = camelCase(props.appname)

      done()
    }.bind(this))
  },

  writing: {
    base: function () {
      this.template('package.json', 'package.json')
      this.template('license', 'license')
      this.template('readme.md', 'readme.md')
      this.copy('.editorconfig', '.editorconfig')
      this.copy('.eslintrc', '.eslintrc')
      this.copy('.eslintignore', '.eslintignore')
      this.copy('.nvmrc', '.nvmrc')
      this.copy('.gitignore', '.gitignore')
      this.copy('.travis.yml', '.travis.yml')
      this.copy('.nvmrc', '.nvmrc')
    },

    tests: function () {
      if (this.props.karma) {
        console.log('setup karma...')
      } else {
        console.log('setup mocha...')
      }
    },
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    })
  }
})
