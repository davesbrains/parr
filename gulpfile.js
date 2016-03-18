var gulp = require('gulp');
//var gutil = require('gulp-util');
var taskListing = require('gulp-task-listing');
var path = require('canonical-path');

gulp.task('default', ['help']);

gulp.task('help', taskListing.withFilters(function (taskName) {
  var isSubTask = taskName.substr(0, 1) == "_";
  return isSubTask;
}, function (taskName) {
  var shouldRemove = taskName === 'default';
  return shouldRemove;
}));

