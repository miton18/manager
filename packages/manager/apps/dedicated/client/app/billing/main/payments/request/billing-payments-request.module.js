import routing from './billing-payments-request.routes';

const moduleName = 'ovhManagerBillingMainPaymentsRequest';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
