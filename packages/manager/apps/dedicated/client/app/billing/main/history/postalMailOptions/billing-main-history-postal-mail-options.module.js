import controller from './billing-main-history-postal-mail-options.controller';
import template from './billing-main-history-postal-mail-options.html';

const moduleName = 'ovhManagerBillingMainHistoryPostalMailOptions';

angular
  .module(moduleName, ['ui.router'])
  .controller('BillingHistoryPostalMailOptionsCtrl', controller)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/main/history/postalMailOptions/billing-main-history-postal-mail-options.html',
        template,
      );
    },
  )
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
