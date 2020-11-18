import template from './filtering.html';
import controller from './filtering.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.dashboard.calls.filtering',
    {
      url: '/filtering',
      views: {
        'lineView@telecom.telephony.billingAccount.line.dashboard': {
          template,
          controller,
          controllerAs: 'CallsFilteringCtrl',
        },
      },
    },
  );
};
