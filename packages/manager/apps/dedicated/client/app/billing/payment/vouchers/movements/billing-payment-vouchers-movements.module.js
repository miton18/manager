import routing from './billing-payment-vouchers-movements.routes';

const moduleName = 'ovhManagerBillingPaymentVouchersMovements';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
