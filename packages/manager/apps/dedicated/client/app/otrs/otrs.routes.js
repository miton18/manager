import otrsCtrl from './otrs.controller';
import otrsDetailCtrl from './detail/otrs-detail.controller';

import otrsTemplate from './otrs.html';
import otrsDetailTemplate from './detail/otrs-detail.html';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.otrs', {
    url: '',
    template: '<data-ui-view></data-ui-view>',
  });

  $stateProvider.state('app.otrs.tickets', {
    url: '/ticket',
    template: otrsTemplate,
    controller: otrsCtrl,
    resolve: {
      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('otrs_title'),
    },
  });

  $stateProvider.state('app.otrs.details', {
    url: '/ticket/:ticketId',
    template: otrsDetailTemplate,
    controller: otrsDetailCtrl,
    resolve: {
      ticketId: /* @ngInject */ ($transition$) =>
        $transition$.params().ticketId,
      breadcrumb: /* @ngInject */ (ticketId) => ticketId,
    },
  });
};
