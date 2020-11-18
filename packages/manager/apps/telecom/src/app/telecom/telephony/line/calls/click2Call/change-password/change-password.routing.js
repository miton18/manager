import template from './change-password.html';
import controller from './change-password.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.dashboard.calls.click2call.changePassword',
    {
      url: '/modify/:userId',
      views: {
        'lineView@telecom.telephony.billingAccount.line.dashboard': {
          template,
          controller,
          controllerAs: 'Click2CallChangePasswordCtrl',
        },
      },
    },
  );
};
