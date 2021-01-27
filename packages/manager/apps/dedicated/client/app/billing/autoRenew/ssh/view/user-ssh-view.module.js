import controller from './user-ssh-view.controller';
import template from './user-ssh-view.html';

const moduleName = 'ovhManagerBillingAutorenewSshView';

angular
  .module(moduleName, [])
  .controller('UserAccount.controllers.ssh.view', controller)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/autoRenew/ssh/view/user-ssh-view.html',
        template,
      );
    },
  );

export default moduleName;
