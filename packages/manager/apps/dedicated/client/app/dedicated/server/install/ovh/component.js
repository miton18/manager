import controller from './controller';
import template from './index.html';

export default {
  name: 'dedicatedServerInstallOvh',
  bindings: {
    server: '<',
    systemsFamilies: '<',
  },
  controller,
  template,
};
