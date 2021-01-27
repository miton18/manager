import routing from './billing-main-history-debt-pay.routes';

const moduleName = 'ovhManagerBillingMainHistoryDebtPay';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
