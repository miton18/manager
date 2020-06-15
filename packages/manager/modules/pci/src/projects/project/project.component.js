import template from './project.html';
import controller from './project.controller';

export default {
  bindings: {
    goToProject: '<',
    goToProjectInactive: '<',
    project: '<',
    user: '<',
  },
  controller,
  template,
};
