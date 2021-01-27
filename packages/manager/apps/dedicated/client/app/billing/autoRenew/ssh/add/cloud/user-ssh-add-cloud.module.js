import controller from './user-ssh-add-cloud.controller';
import template from './user-ssh-add-cloud.html';

const moduleName = 'ovhManagerBillingAutorenewSshAddCloud';

angular
  .module(moduleName, [])
  .controller('UserAccount.controllers.ssh.cloud.add', controller)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/autoRenew/ssh/add/cloud/user-ssh-add-cloud.html',
        template,
      );
    },
  );

export default moduleName;
