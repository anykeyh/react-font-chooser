module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-coffee-react')
  grunt.loadNpmTasks('grunt-contrib-sass')

  grunt.initConfig {
    sass:
      dist:
        files: [
          'output/react-font-chooser.css': 'styles/react-font-chooser.scss'
        ]
    cjsx:
      compile:
        files:
          'output/react-font-chooser.js': [
            'src/*.cjsx'
          ]
  }

  grunt.registerTask('default', ['sass', 'cjsx:compile'])