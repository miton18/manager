import controller from './user-ssh-delete.controller';
import template from './user-ssh-delete.html';

const moduleName = 'ovhManagerBillingAutorenewSshDelete';

angular
  .module(moduleName, [])
  .controller('UserAccount.controllers.ssh.delete', controller)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/autoRenew/ssh/delete/user-ssh-delete.html',
        template,
      );
    },
  );

export default moduleName;
