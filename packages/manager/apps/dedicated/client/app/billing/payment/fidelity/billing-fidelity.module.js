import routing from './billing-payment-fidelity.routes';
import service from './billing-fidelity.service';
import creditOrderCtrl from './creditOrder/billing-fidelity-creditOrder.controller';
import creditOrderTpl from './creditOrder/billing-fidelity-creditOrder.html';

const moduleName = 'ovhManagerBillingPaymentFidelity';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .controller('Billing.controllers.FidelityCreditOrder', creditOrderCtrl)
  .service('BillingFidelity', service)
  .run(
    /* @ngInject */ ($templateCache) => {
      $templateCache.put(
        'billing/payment/fidelity/creditOrder/billing-fidelity-creditOrder.html',
        creditOrderTpl,
      );
    },
  )
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
