import controller from './controller';
import template from './template.html';

const component = {
  bindings: {
    hds: '<',
    model: '<',
    onChange: '<',
    onLinkClicked: '<',
  },
  controller,
  template,
};

export default component;
