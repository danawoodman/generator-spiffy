var yeoman = require('yeoman-generator')
var path = require('path')
var chalk = require('chalk')
var camelCase = require('camelcase')
var yosay = require('yosay')
var ejs = require('ejs')
var mkdirp = require('mkdirp')

var NODE_MODULE_CHOICE = 'NPM module'
//var APPLICATION_CHOICE = 'Web application (React, Reflux, WebPack, etc...)'

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
      //{
        //type: 'list',
        //name: 'projectType',
        //message: 'What kind of project is this?',
        //choices: [
          //NODE_MODULE_CHOICE,
          ////APPLICATION_CHOICE,
        //],
        //default: 0,
      //},
      {
        name: 'appname',
        message: 'What\'s the name of the project?',
        default: this.pkg.name || this.destinationRoot().split(path.sep).slice(-1)[0] || 'spiffy-app',
        // TODO: Slugify name...
      },
      {
        name: 'name',
        message: 'What is your full name or company?',
        default: this.config.get('full_name'),
      },
      {
        name: 'username',
        message: 'What is your Github username or organization?',
        default: this.config.get('github_username'),
      },
    ]

    if (!this.pkg.description) {
      prompts.push({
        name: 'description',
        message: 'What is your project description?',
      })
    }

    this.prompt(prompts, function (props) {
      this.props = props

      this.props.isNpmModule = true // props.projectType === NODE_MODULE_CHOICE
      this.props.isApp = false //props.projectType === APPLICATION_CHOICE
      this.props.karma = this.props.isApp
      this.props.camelAppName = camelCase(props.appname)

      // Save configuration
      this.config.set('full_name', this.props.name)
      this.config.set('github_username', this.props.username)

      done()
    }.bind(this))
  },

  writing: {
    base: function () {
      this.copy('.editorconfig', '.editorconfig')
      this.copy('.eslintignore', '.eslintignore')
      this.copy('.nvmrc', '.nvmrc')
      this.copy('.gitignore', '.gitignore')
      this.copy('.travis.yml', '.travis.yml')
      this.copy('.nvmrc', '.nvmrc')
      this.copy('.npmignore', '.npmignore')
      this.template('.eslintrc', '.eslintrc')
      this.template('package.json', 'package.json')
      this.template('license', 'license')
      this.template('readme.md', 'readme.md')
    },

    type: function () {
      if (this.props.isNpmModule) {
        this.template('src/index.js', 'src/index.js')

        // In your generator
        mkdirp.sync(this.destinationRoot() + '/lib')
      } else {
        console.log('OTHER PROJECT TYPES COMING SOON!')
        // TODO:
        // - React, Reflux, react-router
        // - components/stores/actions folders
        // - default routes file
        // - webpack config
        // - karma
      }
    },

    tests: function () {
      if (this.props.karma) {
        console.log('KARMA COMING SOON!')
      } else {
        this.copy('test/mocha.opts', 'test/mocha.opts')
        this.copy('test/helper.js', 'test/helper.js')
        this.template('test/index-test.js', 'test/index-test.js')
      }
    },
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    })
  }
})
