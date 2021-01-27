import controller from './user-ssh-add-dedicated.controller';
import template from './user-ssh-add-dedicated.html';

const moduleName = 'ovhManagerBillingAutorenewSshAddDedicated';

angular
  .module(moduleName, [])
  .controller('UserAccount.controllers.ssh.dedicated.add', controller)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/autoRenew/ssh/add/dedicated/user-ssh-add-dedicated.html',
        template,
      );
    },
  );

export default moduleName;
