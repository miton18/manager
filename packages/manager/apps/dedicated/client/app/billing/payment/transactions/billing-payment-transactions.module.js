import routing from './billing-payment-transactions.routes';

const moduleName = 'ovhManagerBillingPaymentTransactions';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
