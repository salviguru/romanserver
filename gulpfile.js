var gulp = require("gulp");
var shell = require('gulp-shell');

// This compiles new binary with source change
gulp.task("install-binary", shell.task([
 'go install github.com/salviguru/romanserver@latest'
]));

// Second argument tells install-binary is a deapendency for restart-supervisor
gulp.task("restart-supervisor", shell.task([
 'supervisorctl restart myserver'
]))

gulp.task('default', gulp.series('install-binary','restart-supervisor'));
