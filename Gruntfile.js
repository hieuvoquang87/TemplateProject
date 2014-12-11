module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {                                 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   
                    'app/build/html/header-view.html': 'app/build/html/header-view.html'    
                    
                }
            }
        },
        uglify: {
            models: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true,
                    preserveComments: false
                }

            },
            debug: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'app/build/js/app.min.js': ['app/src/js/app.js'],
                    'app/build/js/controller.min.js': ['app/src/js/controller/**/*.js'],
                    'app/build/js/service.min.js': ['app/src/js/service/**/*.js'],
                    'app/build/js/directive.min.js': ['app/src/js/directive/**/*.js'],
                    'app/build/js/factory.min.js': ['app/src/js/factory/**/*.js'],
                    'app/build/js/constant.min.js': ['app/src/js/constant/**/*.js'],
                    'app/build/js/filter.min.js': ['app/src/js/filter/**/*.js'],
                    'app/build/js/components.min.js': ['app/src/components/**/*.js']                   
                }
            },
            release: {
                options: {
                    compress: true,
                    mangle: true,
                    beautify: false
                },
                files: {
                    'app/build/js/app.min.js': ['app/src/js/app.js'],
                    'app/build/js/controller.min.js': ['app/src/js/controller/**/*.js'],
                    'app/build/js/service.min.js': ['app/src/js/service/**/*.js'],
                    'app/build/js/directive.min.js': ['app/src/js/directive/**/*.js'],
                    'app/build/js/factory.min.js': ['app/src/js/factory/**/*.js'],
                    'app/build/js/constant.min.js': ['app/src/js/constant/**/*.js'],
                    'app/build/js/filter.min.js': ['app/src/js/filter/**/*.js'],
                    'app/build/js/components.min.js': ['app/src/components/**/*.js']  
                    
                }
            }
        },
        less: {
            debug: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "app/build/css/components.css": "app/src/css/components/*.less",
                    "app/build/css/bootstrap.css": "app/src/css/bootstrap/*.css",
                    "app/build/css/app.css": "app/src/css/app.css"
                }
            },
            release: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                        "app/build/css/components.css": "app/src/css/components/*.less",
                        "app/build/css/bootstrap.css": "app/src/css/bootstrap/*.css",
                        "app/build/css/app.css": "app/src/css/app.css" 
                    }
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'app/src/html/',
                src: '**',
                dest: 'app/build/html',
                flatten: true,
                filter: 'isFile'
            }
        },
        watch: {
            html: {
                files: ['./app/src/html/**/*.html'],
                tasks: ['minify-html'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['./app/src/js/**/*.js'],
                tasks: ['uglify:debug'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['./app/src/css/components/**/*.less'],
                tasks: ['less:debug'],
                options: {
                    livereload: true
                }
            }
        }

    });

    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-modernizr');
    
    grunt.registerTask('minify-html', ['copy:html', 'htmlmin:dist']);
    
    grunt.registerTask('build-debug', ['less:debug', 'uglify:debug', 'copy:html']);
    grunt.registerTask('deploy', ['less:release', 'uglify:release', 'copy:html','htmlmin:dist']); 
};